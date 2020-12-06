// @flow

import { type Node } from 'react';
import { usePreloadedQuery, graphql } from 'react-relay/hooks';
import { Heading } from '@tbergq/components';

import useIsLoggedIn from '../components/use-is-logged-in';
import Teams from './teams/teams';
import type { dashboardQuery } from './__generated__/dashboardQuery.graphql';

const query = graphql`
  query dashboardQuery {
    viewer {
      ... on User {
        ...teams_user
      }
    }
  }
`;

type Props = {
  prepared: {
    query: any,
  },
};

function Dashboard({ prepared }: Props): Node {
  const data = usePreloadedQuery<dashboardQuery>(query, prepared.query);
  useIsLoggedIn();

  return (
    <>
      <Heading align="center" level="h1">
        My dashboard
      </Heading>
      <Teams user={data.viewer} />
    </>
  );
}

export default Dashboard;
