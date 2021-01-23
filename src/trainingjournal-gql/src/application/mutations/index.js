// @flow

import { GraphQLObjectType } from 'graphql';

import * as exerciseMutations from './exercise';
import * as programMutations from './program';

export default (new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation.',
  fields: {
    ...exerciseMutations,
    ...programMutations,
  },
}): GraphQLObjectType);
