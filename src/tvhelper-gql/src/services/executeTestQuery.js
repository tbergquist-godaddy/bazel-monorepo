// @flow

import { graphql } from 'graphql';

import schema from '../Schema';
import createContext from './createGraphqlContext';

export default function executeTestQuery(
  query: string,
  variables: ?{ ... },
  request: ?{ ... } = {},
): Promise<{ ... }> {
  // $FlowExpectedError[incompatible-call] Ok for testing purposes
  // $FlowExpectedError[prop-missing]
  return graphql(schema, query, null, createContext(request), variables);
}
