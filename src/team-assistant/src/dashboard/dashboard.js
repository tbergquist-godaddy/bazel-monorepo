// @flow

import { type Node } from 'react';
import { usePreloadedQuery, graphql } from 'react-relay/hooks';
import { Heading, Card } from '@tbergq/components';
import { create } from '@adeira/sx';

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
  +prepared: {
    +query: any,
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
      <div className={styles('grid')}>
        <Teams user={data.viewer} />
        <Card>TODO attendance</Card>
        <Card>TODO stats</Card>
      </div>
    </>
  );
}

const styles = create({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: 'var(--space-large)',
  },
});

export default Dashboard;
