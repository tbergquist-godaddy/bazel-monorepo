// @flow

import { GraphQLObjectType } from 'graphql';

import * as dayMutations from './day';
import * as exerciseMutations from './exercise';
import * as programMutations from './program';
import * as setMutations from './set';
import * as weekMutations from './week';

export default (new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation.',
  fields: {
    ...exerciseMutations,
    ...programMutations,
    ...weekMutations,
    ...dayMutations,
    ...setMutations,
  },
}): GraphQLObjectType);
