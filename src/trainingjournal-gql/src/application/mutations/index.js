// @flow

import { GraphQLObjectType } from 'graphql';

import * as exerciseMutations from './exercise';
import * as programMutations from './program';
import * as weekMutations from './week';
import * as dayMutations from './day';

export default (new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation.',
  fields: {
    ...exerciseMutations,
    ...programMutations,
    ...weekMutations,
    ...dayMutations,
  },
}): GraphQLObjectType);
