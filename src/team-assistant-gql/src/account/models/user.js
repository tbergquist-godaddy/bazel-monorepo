// @flow

import { GraphQLObjectType } from 'graphql';
import globalId from '@adeira/graphql-global-id';

import Identity from './identity';

export default (new GraphQLObjectType({
  name: 'User',
  description: 'The logged in user',
  fields: {
    id: globalId(({ identity: { email } }) => email),
    identity: { type: Identity },
  },
}): GraphQLObjectType);
