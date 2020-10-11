// @flow

import { GraphQLObjectType } from 'graphql';

import accountMutations from './account/mutations';

export default (new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation.',
  fields: {
    ...accountMutations,
  },
}): GraphQLObjectType);
