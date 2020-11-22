// @flow

import { GraphQLObjectType, GraphQLBoolean, GraphQLID } from 'graphql';

export default (new GraphQLObjectType({
  name: 'RangeDelete',
  description: 'Return type used for range delete mutations',
  fields: {
    success: {
      type: GraphQLBoolean,
    },
    id: {
      type: GraphQLID,
    },
  },
}): GraphQLObjectType);
