// @flow

import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

const Unauthorized: GraphQLObjectType = new GraphQLObjectType({
  name: 'Unauthorized',
  description: 'Defines a not logged in type',
  fields: {
    message: { type: (GraphQLNonNull(GraphQLString): GraphQLNonNull<typeof GraphQLString>) },
  },
});

export default Unauthorized;
