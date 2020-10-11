// @flow

import { GraphQLSchema } from 'graphql';

import RootQuery from './root-query';
import RootMutation from './root-mutation';

export default (new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
}): GraphQLSchema);
