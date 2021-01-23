// @flow

import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import globalID from '@adeira/graphql-global-id';

const Exercise: GraphQLObjectType = new GraphQLObjectType({
  name: 'Exercise',
  description: 'Model of an exercise',
  fields: {
    id: globalID(({ _id: id }) => id),
    name: { type: GraphQLString },
    muscleGroups: { type: GraphQLList(GraphQLString) },
  },
});

export default Exercise;
