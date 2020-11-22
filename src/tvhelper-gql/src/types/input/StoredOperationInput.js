// @flow

import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

export default (new GraphQLInputObjectType({
  name: 'StoredOperationInput',
  description: 'Input type to create a stored operation',
  fields: {
    operationId: {
      type: GraphQLNonNull(GraphQLString),
    },
    text: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
}): GraphQLInputObjectType);
