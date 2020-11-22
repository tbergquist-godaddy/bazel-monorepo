// @flow strict-local

import { GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@adeira/graphql-global-id';

export default (new GraphQLObjectType({
  name: 'Network',
  description: 'The network hosting a tv show',
  fields: {
    id: GlobalID(({ id }) => id),
    name: {
      type: GraphQLString,
    },
  },
}): GraphQLObjectType);
