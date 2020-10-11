// @flow

import { GraphQLSchema } from 'graphql';

import RootQuery from './root-query';

export default (new GraphQLSchema({
  query: RootQuery,
}): GraphQLSchema);
