// @flow

import { GraphQLUnionType, GraphQLObjectType, GraphQLEnumType, GraphQLString } from 'graphql';

import Identity from './identity';
import ErrorInterface from '../../models/error-interface';

const CreateAccountErrorReason = new GraphQLEnumType({
  name: 'CreateAccountErrorReason',
  values: {
    EMAIL_EXISTS: { value: 'EMAIL_EXISTS' },
    UNKNOWN: { value: 'UNKNOWN' },
    INVALID_EMAIL: { value: 'INVALID_EMAIL' },
    MISSING_PASSWORD: { value: 'MISSING_PASSWORD' },
  },
});
const CreateAccountError = new GraphQLObjectType({
  name: 'CreateAccountError',
  description: 'Error type for creating an account',
  interfaces: [ErrorInterface],
  fields: {
    message: { type: GraphQLString },
    reason: { type: CreateAccountErrorReason },
  },
});

export default (new GraphQLUnionType({
  name: 'CreateAccountResponse',
  types: [Identity, CreateAccountError],
  resolveType: (value) => {
    if (value.email != null) {
      return Identity;
    }
    return CreateAccountError;
  },
}): GraphQLUnionType);
