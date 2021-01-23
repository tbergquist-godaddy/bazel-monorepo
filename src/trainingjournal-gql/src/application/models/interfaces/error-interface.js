// @flow

import { GraphQLInterfaceType, GraphQLString } from 'graphql';

const ErrorInterface: GraphQLInterfaceType = new GraphQLInterfaceType({
  name: 'Error',
  fields: {
    message: { type: GraphQLString },
  },
});

export default ErrorInterface;
