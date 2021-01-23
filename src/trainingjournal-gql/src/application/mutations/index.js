// @flow

import { GraphQLObjectType } from 'graphql';

import * as exerciseMutations from './exercise';

export default (new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation.',
  fields: {
    ...exerciseMutations,
  },
}): GraphQLObjectType);
