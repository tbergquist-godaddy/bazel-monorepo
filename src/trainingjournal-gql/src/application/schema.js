// @flow

import { GraphQLSchema } from 'graphql';

import RootQuery from './queries';
import RootMutation from './mutations';

export default (new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
}): GraphQLSchema);
