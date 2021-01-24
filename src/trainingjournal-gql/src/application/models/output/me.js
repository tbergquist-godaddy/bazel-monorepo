// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import globalID from '@adeira/graphql-global-id';
import {
  exerciseConnectionResolver,
  programConnectionResolver,
} from '@tj-gql/application/resolvers';
import { connectionArgs } from '@adeira/graphql-relay';

import { ExerciseConnection } from './exercise';
import { ProgramConnection } from './program';

const me: GraphQLObjectType = new GraphQLObjectType({
  name: 'Me',
  description: 'The logged in user',
  fields: {
    id: globalID(({ id }) => id),
    email: { type: GraphQLString },
    exercises: {
      type: ExerciseConnection,
      resolve: exerciseConnectionResolver,
      args: connectionArgs,
    },
    programs: {
      type: ProgramConnection,
      resolve: programConnectionResolver,
      args: connectionArgs,
    },
  },
});

export default me;
