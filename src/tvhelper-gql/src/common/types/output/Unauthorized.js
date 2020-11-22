// @flow strict

import { GraphQLObjectType, GraphQLString } from 'graphql';

export default (new GraphQLObjectType({
  name: 'Unauthorized',
  description: 'User is not authorized to view content',
  isTypeOf: (value) => value === 'Unauthorized',
  fields: {
    message: {
      type: GraphQLString,
      resolve: () => {
        return 'You must be logged in to se this content';
      },
    },
  },
}): GraphQLObjectType);
