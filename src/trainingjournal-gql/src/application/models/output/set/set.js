// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import globalID from '@adeira/graphql-global-id';

import { Exercise } from '../exercise';

const Set: GraphQLObjectType = new GraphQLObjectType({
  name: 'Set',
  description: 'Set model',
  fields: {
    id: globalID(({ _id: id }) => id),
    sets: { type: GraphQLString },
    reps: { type: GraphQLString },
    groups: { type: GraphQLString },
    exercise: { type: Exercise },
  },
});

export default Set;
