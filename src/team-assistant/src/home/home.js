// @flow

import { useEffect, Suspense, type Node } from 'react';
import { Link } from 'react-router-dom';
import fbt from 'fbt';
import { useQueryLoader, usePreloadedQuery, graphql } from 'react-relay/hooks';
import { Spinner } from '@tbergq/components';

import type { homeQuery } from './__generated__/homeQuery.graphql';
import useInjectSxStyles from '../components/use-inject-sx-styles';

const query = graphql`
  query homeQuery {
    test(id: "1") {
      id
      firstName
      lastName
    }
  }
`;

function Content({ queryReference }) {
  useInjectSxStyles();
  const data = usePreloadedQuery<homeQuery>(query, queryReference);

  return (
    <div>
      <h1>
        <fbt desc="Todo text">Home TODO</fbt>
      </h1>
      <Link to="/login">Go login</Link>
      <div>{data.test?.id}</div>
      <div>{data.test?.firstName}</div>
      <div>{data.test?.lastName}</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default function Home(): Node {
  const [queryReference, loadQuery] = useQueryLoader(query);
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
}
