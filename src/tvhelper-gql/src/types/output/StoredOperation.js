// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';

export default (new GraphQLObjectType({
  name: 'StoredOperation',
  description: 'A stored operation, a has with a corresponding graphql operation',
  fields: {
    operationId: {
      type: GraphQLString,
    },
    text: {
      type: GraphQLString,
    },
  },
}): GraphQLObjectType);
