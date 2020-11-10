// @flow

import { type AbstractComponent } from 'react';
import { Link } from 'react-router-dom';
import fbt from 'fbt';
import { usePreloadedQuery, graphql } from 'react-relay/hooks';
import { Heading } from '@tbergq/components';

import type { homeQuery } from './__generated__/homeQuery.graphql';
import withUseQuery, { type QueryReference } from '../relay/with-use-query';

const query = graphql`
  query homeQuery {
    test(id: "1") {
      id
      firstName
      lastName
    }
  }
`;

type Props = {
  +queryReference?: QueryReference<any, any>,
};

function Home({ queryReference = null }: Props) {
  const data = usePreloadedQuery<homeQuery>(query, queryReference);

  return (
    <div>
      <Link to="/login">Go login</Link>
      <div>{data.test?.id}</div>
      <div>{data.test?.firstName}</div>
      <div>{data.test?.lastName}</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default (withUseQuery(Home, {
  query,
  persistentChildren: (
    <Heading level="h1">
      <fbt desc="Todo text">Home TODO</fbt>
    </Heading>
  ),
}): AbstractComponent<Props>);
