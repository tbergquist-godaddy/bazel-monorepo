// @flow

import { GraphQLObjectType, GraphQLEnumType, GraphQLString } from 'graphql';
import { ErrorInterface } from '@tj-gql/application/models/interfaces';

type FailedReason = 'UNAUTHORIZED' | 'UNEXPECTED';

export class CreateExerciseFailed {
  reason: FailedReason;

  constructor(reason: FailedReason) {
    this.reason = reason;
  }

  getMessage(): string {
    if (this.reason === 'UNAUTHORIZED') {
      return 'You must be logged in to create an exercise.';
    }
    return 'We had an unexpected error, please try again.';
  }
}

const CreateExerciseErrorReason = new GraphQLEnumType({
  name: 'CreateExerciseErrorReason',
  values: {
    UNAUTHORIZED: { value: 'UNAUTHORIZED' },
    UNEXPECTED: { value: 'UNEXPECTED' },
  },
});

const CreateExerciseError: GraphQLObjectType = new GraphQLObjectType({
  name: 'CreateExerciseError',
  description: 'Model for create an exercise error',
  interfaces: [ErrorInterface],
  fields: {
    message: {
      type: GraphQLString,
      resolve: (input) => {
        return input.getMessage();
      },
    },
    reason: {
      type: CreateExerciseErrorReason,
    },
  },
});

export default CreateExerciseError;
