// @flow

import { GraphQLObjectType } from 'graphql';

import { ProgramEdge } from './program-connection';

const CreateProgram: GraphQLObjectType = new GraphQLObjectType({
  name: 'CreateProgram',
  description: 'Successful program creation model',
  fields: {
    programEdge: {
      type: ProgramEdge,
      resolve: (node) => ({ node }),
    },
  },
});

export default CreateProgram;
