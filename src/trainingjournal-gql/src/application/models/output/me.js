// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import globalID from '@adeira/graphql-global-id';
import { exerciseConnectionResolver } from '@tj-gql/application/resolvers';

import { ExerciseConnection } from './exercise';

const me: GraphQLObjectType = new GraphQLObjectType({
  name: 'Me',
  description: 'The logged in user',
  fields: {
    id: globalID(({ id }) => id),
    email: { type: GraphQLString },
    exercises: {
      type: ExerciseConnection,
      resolve: exerciseConnectionResolver,
    },
  },
});

export default me;
