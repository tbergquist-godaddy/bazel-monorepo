// @flow

import { GraphQLObjectType } from 'graphql';

import { ExerciseEdge } from './exercise';

const CreateExercise: GraphQLObjectType = new GraphQLObjectType({
  name: 'CreateExercise',
  description: 'Successful exercise creation model',
  fields: {
    exerciseEdge: {
      type: ExerciseEdge,
      resolve: (node) => ({ node }),
    },
  },
});

export default CreateExercise;
