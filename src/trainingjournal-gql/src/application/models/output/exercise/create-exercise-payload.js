// @flow

import { GraphQLUnionType } from 'graphql';

import CreateExerciseError, { CreateExerciseFailed } from './create-exercise-error';
import CreateExercise from './create-exercise';

const CreateExercisePayload: GraphQLUnionType = new GraphQLUnionType({
  name: 'CreateExercisePayload',
  description: 'Union type of creating an exercise',
  types: [CreateExerciseError, CreateExercise],
  resolveType: (value) => {
    if (value instanceof CreateExerciseFailed) {
      return CreateExerciseError;
    }
    return CreateExercise;
  },
});

export default CreateExercisePayload;
