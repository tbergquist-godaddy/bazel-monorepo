// @flow

import { GraphQLObjectType } from 'graphql';

import { SetEdge } from './set';

const CreateSet: GraphQLObjectType = new GraphQLObjectType({
  name: 'CreateSet',
  description: 'Successful set creation model',
  fields: {
    setEdge: {
      type: SetEdge,
      resolve: (node) => ({ node }),
    },
  },
});

export default CreateSet;
