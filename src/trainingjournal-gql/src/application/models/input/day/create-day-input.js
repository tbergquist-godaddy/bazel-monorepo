// @flow

import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';
import type { OpaqueIDString } from '@adeira/graphql-global-id/src/Encoder';

export type CreateDayInputType = {
  +name: string,
  +programId: OpaqueIDString,
  +weekId: OpaqueIDString,
};

const CreateDayInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'CreateDayInput',
  description: 'Model for creating a day',
  fields: {
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    programId: {
      type: GraphQLNonNull(GraphQLID),
    },
    weekId: {
      type: GraphQLNonNull(GraphQLID),
    },
  },
});

export default CreateDayInput;
