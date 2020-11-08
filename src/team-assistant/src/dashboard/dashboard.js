// @flow

import { type ComponentType, useEffect, Suspense } from 'react';
import { useQueryLoader, usePreloadedQuery, graphql } from 'react-relay/hooks';
import { Spinner } from '@tbergq/components';

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
    <div>
      <h1>My dashboard</h1>
      <Teams user={data.viewer} />
    </div>
  );
}

export default (function Dashboard() {
  const [queryReference, loadQuery] = useQueryLoader(query);

  useInjectSxStyles();
  useIsLoggedIn();

  useEffect(() => {
    loadQuery({});
  }, [loadQuery]);

  if (queryReference == null) {
    return <Spinner />;
  }
  return (
    <Suspense fallback={<Spinner />}>
      <Content queryReference={queryReference} />
    </Suspense>
  );
}: ComponentType<{}>);
