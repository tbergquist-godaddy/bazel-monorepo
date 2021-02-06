// @flow

import { type Node } from 'react';
import { Heading } from '@tbergq/components';
import { Helmet } from 'react-helmet';
import { graphql, usePreloadedQuery } from 'react-relay/hooks';
import type { GraphQLTaggedNode } from 'react-relay';

import WeekList from './week/week-list';

export const query: GraphQLTaggedNode = graphql`
  query programQuery($id: ID!) {
    node(id: $id) {
      ... on Program {
        name
      }
      ...weekList_weeks
    }
  }
`;
type Props = {
  +prepared: {
    +query: any,
  },
  +routeData: {
    +params: {
      +id: string,
    },
  },
};

export default function Program({ prepared }: Props): Node {
  const data = usePreloadedQuery(query, prepared.query);

  return (
    <>
      <Helmet>
        <title>Trainingjournal | {data?.node?.name ?? ''}</title>
      </Helmet>
      <Heading level="h1">{data?.node?.name}</Heading>
      <WeekList weeks={data?.node} />
    </>
  );
}
