// @flow

import type { Node } from 'react';
import { useFragment, graphql } from 'react-relay/hooks';

import type { teams_user$key as User } from './__generated__/teams_user.graphql';

type Props = {
  +user: ?User,
};
export default function Teams({ user }: Props): Node {
  const ref = useFragment(
    graphql`
      fragment teams_user on User {
        teams(first: 5) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `,
    user,
  );
  const teams = ref?.teams?.edges ?? [];
  return (
    <div>
      teams
      {teams.map((edge) => (
        <div key={edge?.node?.id}>{edge?.node?.name}</div>
      ))}
    </div>
  );
}
