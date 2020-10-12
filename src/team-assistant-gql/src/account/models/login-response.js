// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';

const LoginResponse: GraphQLObjectType = new GraphQLObjectType({
  name: 'LoginResponse',
  description: 'The response of a login mutation',
  fields: {
    token: { type: GraphQLString },
  },
});

export default LoginResponse;
