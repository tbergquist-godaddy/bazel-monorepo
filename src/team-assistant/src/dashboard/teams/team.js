// @flow

import type { Node } from 'react';
import { useFragment, graphql } from 'react-relay/hooks';

import type { team_team$key as TeamType } from './__generated__/team_team.graphql';

type Props = {
  +team: ?TeamType,
};
export default function Team({ team }: Props): Node {
  const ref = useFragment(
    graphql`
      fragment team_team on Team {
        name
      }
    `,
    team,
  );

  return <div>{ref?.name}</div>;
}
