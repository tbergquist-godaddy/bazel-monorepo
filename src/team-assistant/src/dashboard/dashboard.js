// @flow

import { type AbstractComponent } from 'react';
import { usePreloadedQuery, graphql } from 'react-relay/hooks';
import { Heading } from '@tbergq/components';

import withUseQuery, { type QueryReference } from '../relay/with-use-query';
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
  +queryReference?: QueryReference<any, any>,
};

function Dashboard({ queryReference = null }: Props) {
  const data = usePreloadedQuery<dashboardQuery>(query, queryReference);
  useIsLoggedIn();

  return <Teams user={data.viewer} />;
}

export default (withUseQuery<Props>(Dashboard, {
  query,
  persistentChildren: (
    <Heading align="center" level="h1">
      My dashboard
    </Heading>
  ),
}): AbstractComponent<Props>);
