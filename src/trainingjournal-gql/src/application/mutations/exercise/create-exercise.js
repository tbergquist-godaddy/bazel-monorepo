// @flow

import { GraphQLNonNull } from 'graphql';
import { ExerciseModel } from '@tj-gql/infrastructure/models';
import {
  CreateExercisePayload,
  CreateExerciseInput,
  type ExerciseInputType,
  CreateExerciseFailed,
} from '@tj-gql/application/models';
import type { GraphqlContext } from '@tj-gql/application/services';

type Args = {
  +exercise: ExerciseInputType,
  ...
};

export default {
  type: CreateExercisePayload,
  args: {
    exercise: {
      type: (GraphQLNonNull(CreateExerciseInput): GraphQLNonNull<typeof CreateExerciseInput>),
    },
  },
  resolve: async (
    _: mixed,
    { exercise }: Args,
    { user }: GraphqlContext,
  ): Promise<ExerciseModel | CreateExerciseFailed> => {
    if (user == null) {
      return new CreateExerciseFailed('UNAUTHORIZED');
    }
    try {
      const createExercise = await ExerciseModel.createExercise({
        ...exercise,
        user: user.id,
      });
      return createExercise;
    } catch (e) {
      return new CreateExerciseFailed('UNEXPECTED');
    }
  },
};
