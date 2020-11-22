// @flow strict

import { GraphQLObjectType, GraphQLBoolean } from 'graphql';

export default (new GraphQLObjectType({
  name: 'ChangePasswordResponse',
  description: 'Response indicating that the password was changed',
  fields: {
    success: {
      type: GraphQLBoolean,
      resolve: () => true,
    },
  },
}): GraphQLObjectType);
