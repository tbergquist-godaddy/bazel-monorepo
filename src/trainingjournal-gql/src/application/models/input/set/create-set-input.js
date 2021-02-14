// @flow

import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';
import type { OpaqueIDString } from '@adeira/graphql-global-id/src/Encoder';

export type CreateSetInputType = {
  +dayId: OpaqueIDString,
  +exerciseId: OpaqueIDString,
  +sets: string,
  +reps: string,
  +group?: string,
  +breakTime: string,
};

const CreateSetInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'CreateSetInput',
  description: 'Model for creating a set',
  fields: {
    dayId: {
      type: GraphQLNonNull(GraphQLID),
    },
    exerciseId: {
      type: GraphQLNonNull(GraphQLID),
    },
    sets: {
      type: GraphQLNonNull(GraphQLString),
    },
    reps: {
      type: GraphQLNonNull(GraphQLString),
    },
    breakTime: {
      type: GraphQLNonNull(GraphQLString),
    },
    group: {
      type: GraphQLString,
    },
  },
});

export default CreateSetInput;
