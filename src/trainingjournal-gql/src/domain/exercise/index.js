// @flow

import { ExerciseModel } from '@tj-gql/infrastructure/models';

export function getExercises(
  userIds: $ReadOnlyArray<string>,
): Promise<$ReadOnlyArray<$ReadOnlyArray<ExerciseModel>>> {
  const promises = userIds.map<Promise<$ReadOnlyArray<ExerciseModel>>>((id) =>
    ExerciseModel.getExercises(id),
  );
  return Promise.all(promises);
}

export function getExercise(
  ids: $ReadOnlyArray<string>,
  userId: ?string,
): Promise<$ReadOnlyArray<ExerciseModel>> {
  return ExerciseModel.getExercisesByIds(ids, userId);
}
