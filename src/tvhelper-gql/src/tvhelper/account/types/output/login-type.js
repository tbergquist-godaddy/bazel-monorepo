// @flow strict

import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from 'graphql';

export default (new GraphQLObjectType({
  name: 'LoginType',
  description: 'Login response, indicates success and gives the token',
  fields: {
    token: {
      type: GraphQLString,
    },
    success: {
      type: GraphQLBoolean,
    },
  },
}): GraphQLObjectType);
