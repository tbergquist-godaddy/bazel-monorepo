// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import globalID from '@adeira/graphql-global-id';
import type { GraphqlContext } from '@tj-gql/application/services';

import { Exercise } from '../exercise';

const Set: GraphQLObjectType = new GraphQLObjectType({
  name: 'Set',
  description: 'Set model',
  fields: {
    id: globalID(({ _id: id }) => id),
    sets: { type: GraphQLString },
    reps: { type: GraphQLString },
    group: { type: GraphQLString },
    exercise: {
      type: Exercise,
      resolve: ({ exercise }: { +exercise: string }, _: mixed, { dataloader }: GraphqlContext) => {
        return dataloader.exercise.load(exercise);
      },
    },
  },
});

export default Set;
