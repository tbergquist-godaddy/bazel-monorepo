// @flow

import { type Node, useState } from 'react';
import { useFragment, graphql } from 'react-relay/hooks';
import { Card, Heading, IconButton } from '@tbergq/components';
import { create } from '@adeira/sx';
import { MdAddCircle } from 'react-icons/md';

import type { teams_user$key as User } from './__generated__/teams_user.graphql';
import Team from './team';
import AddTeamModal from './add-team-modal/add-team-modal';

type Props = {
  +user: ?User,
};
export default function Teams({ user }: Props): Node {
  const [show, setShow] = useState(true);
  const toggle = () => setShow((show) => !show);
  const ref = useFragment(
    graphql`
      fragment teams_user on User {
        teams(first: 5) @connection(key: "Teams_teams") {
          __id
          edges {
            node {
              id
              ...team_team
            }
          }
        }
      }
    `,
    user,
  );
  const teams = ref?.teams?.edges ?? [];
  return (
    <Card>
      <div className={styles('heading')}>
        <Heading level="h2" as="h5">
          Teams
        </Heading>
        <IconButton aria-label="Add team" onClick={toggle}>
          <MdAddCircle />
        </IconButton>
      </div>
      {teams.map((edge) => (
        <Team key={edge?.node?.id} team={edge?.node} />
      ))}
      <AddTeamModal connectionId={ref?.teams?.__id} isVisible={show} onClose={toggle} />
    </Card>
  );
}

const styles = create({
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});
