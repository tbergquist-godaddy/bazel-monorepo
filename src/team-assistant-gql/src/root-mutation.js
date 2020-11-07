// @flow

import { GraphQLObjectType } from 'graphql';

import accountMutations from './account/mutations';
import teamMutations from './team/mutations';

export default (new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation.',
  fields: {
    ...accountMutations,
    ...teamMutations,
  },
}): GraphQLObjectType);
