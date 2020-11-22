// @flow

import { GraphQLObjectType, GraphQLList } from 'graphql';

import StoredOperation from './StoredOperation';

export default (new GraphQLObjectType({
  name: 'CreateStoredOperation',
  description: 'A stored operation, a has with a corresponding graphql operation',
  fields: {
    createdOperations: {
      type: GraphQLList(StoredOperation),
    },
  },
}): GraphQLObjectType);
