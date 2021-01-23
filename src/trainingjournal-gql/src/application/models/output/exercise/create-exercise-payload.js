// @flow

import { GraphQLUnionType } from 'graphql';

import { UnauthorizedOrUnknown, UnauthorizedOrUnknownClass } from '../common';
import CreateExercise from './create-exercise';

const CreateExercisePayload: GraphQLUnionType = new GraphQLUnionType({
  name: 'CreateExercisePayload',
  description: 'Union type of creating an exercise',
  types: [UnauthorizedOrUnknown, CreateExercise],
  resolveType: (value) => {
    if (value instanceof UnauthorizedOrUnknownClass) {
      return UnauthorizedOrUnknown;
    }
    return CreateExercise;
  },
});

export default CreateExercisePayload;
