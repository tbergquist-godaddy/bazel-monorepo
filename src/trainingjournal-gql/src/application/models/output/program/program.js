// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import globalID from '@adeira/graphql-global-id';

const Program: GraphQLObjectType = new GraphQLObjectType({
  name: 'Program',
  description: 'Program model',
  fields: {
    id: globalID(({ _id: id }) => id),
    name: { type: GraphQLString },
  },
});

export default Program;
