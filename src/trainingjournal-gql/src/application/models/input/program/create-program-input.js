// @flow

import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

export type CreateProgramInputType = {
  +name: string,
};

const CreateProgramInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'CreateProgramInput',
  description: 'Model for creating a program',
  fields: {
    name: { type: GraphQLNonNull(GraphQLString) },
  },
});

export default CreateProgramInput;
