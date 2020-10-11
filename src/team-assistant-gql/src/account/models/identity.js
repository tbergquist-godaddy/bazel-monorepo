// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import globalId from '@adeira/graphql-global-id';

const Identity: GraphQLObjectType = new GraphQLObjectType({
  name: 'Identity',
  description: 'Identity object of a user',
  fields: {
    id: globalId(({ email }) => email),
    email: { type: GraphQLString },
  },
});

export default Identity;
