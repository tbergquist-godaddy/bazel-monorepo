// @flow

import { type Node } from 'react';
import { Link } from '@tbergq/router';
import fbt from 'fbt';
import { usePreloadedQuery, graphql } from 'react-relay/hooks';
import { Heading } from '@tbergq/components';
import { type GraphQLTaggedNode } from 'relay-runtime';

import { type homeQuery } from './__generated__/homeQuery.graphql';

export const query: GraphQLTaggedNode = graphql`
  query homeQuery {
    test(id: "1") {
      id
      firstName
      lastName
    }
  }
`;

type Props = {
  prepared: {
    query: any,
  },
};

function Home({ prepared }: Props): Node {
  const data = usePreloadedQuery<homeQuery>(query, prepared.query);

  return (
    <div>
      <Heading level="h1">
        <fbt desc="Todo text">Home TODO</fbt>
      </Heading>
      <Link to="/login">Go login</Link>
      <div>{data.test?.id}</div>
      <div>{data.test?.firstName}</div>
      <div>{data.test?.lastName}</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Home;
// (withUseQuery(Home, {
//   query,
//   persistentChildren: (
//     <Heading level="h1">
//       <fbt desc="Todo text">Home TODO</fbt>
//     </Heading>
//   ),
// }): AbstractComponent<Props>);
