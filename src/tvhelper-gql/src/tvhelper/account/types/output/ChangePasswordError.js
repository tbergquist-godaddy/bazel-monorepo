// @flow strict

import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from 'graphql';

import ErrorInterface from '../../../../common/types/interface/Error';

export default (new GraphQLObjectType({
  name: 'ChangePasswordError',
  description: 'Response type indicating an error',
  interfaces: [ErrorInterface],
  fields: {
    message: {
      type: GraphQLString,
      resolve: (parent) => parent.toJSON().message,
    },
    isInvalidPassword: {
      type: GraphQLBoolean,
      resolve: (parent) => parent.toJSON().isInvalidPassword,
    },
  },
}): GraphQLObjectType);
