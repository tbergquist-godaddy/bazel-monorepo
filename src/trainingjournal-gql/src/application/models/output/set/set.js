// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import globalID from '@adeira/graphql-global-id';
import {
  GraphqlBaseObject,
  type GraphQLConnectionDefinitions,
  type GraphqlContext,
} from '@tj-gql/application/services';

import { Exercise } from '../exercise';

const set: GraphqlBaseObject = new GraphqlBaseObject({
  name: 'Set',
  description: 'Set model',
  fields: {
    id: globalID(({ _id: id }) => id),
    sets: { type: GraphQLString },
    reps: { type: GraphQLString },
    group: { type: GraphQLString },
    breakTime: { type: GraphQLString },
    exercise: {
      type: Exercise,
      resolve: ({ exercise }: { +exercise: string }, _: mixed, { dataloader }: GraphqlContext) => {
        return dataloader.exercise.load(exercise);
      },
    },
  },
});

const Set: GraphQLObjectType = set.getGraphqlObject();
const {
  connectionType: SetConnection,
  edgeType: SetEdge,
}: GraphQLConnectionDefinitions = set.getConnectionDefinitions();

export { Set, SetConnection, SetEdge };
