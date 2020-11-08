// @flow

import { type ComponentType, useEffect, Suspense } from 'react';
import { useQueryLoader, usePreloadedQuery, graphql } from 'react-relay/hooks';
import { Spinner, Heading, Card } from '@tbergq/components';

import useInjectSxStyles from '../components/use-inject-sx-styles';
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

function Content({ queryReference }) {
  const data = usePreloadedQuery<dashboardQuery>(query, queryReference);

  return (
    <Card>
      <Heading level="h2" as="h6">
        My Teams
      </Heading>
      <Teams user={data.viewer} />
    </Card>
  );
}

export default (function Dashboard() {
  const [queryReference, loadQuery] = useQueryLoader(query);

  useInjectSxStyles();
  useIsLoggedIn();

  useEffect(() => {
    loadQuery({});
  }, [loadQuery]);

  return (
    <>
      <Heading align="center" level="h1">
        My dashboard
      </Heading>
      {queryReference == null ? (
        <Spinner />
      ) : (
        <Suspense fallback={<Spinner />}>
          <Content queryReference={queryReference} />
        </Suspense>
      )}
    </>
  );
}: ComponentType<{}>);
