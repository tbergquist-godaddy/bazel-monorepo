// @flow

import { GraphQLSchema } from 'graphql';

import RootQuery from './RootQuery';

export default (new GraphQLSchema({
  query: RootQuery,
}): GraphQLSchema);
