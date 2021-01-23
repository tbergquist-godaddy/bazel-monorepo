// @flow

import { ExerciseModel } from '@tj-gql/infrastructure/models';
import {
  connectionFromArray,
  type ConnectionArguments,
  type Connection,
} from '@adeira/graphql-relay';
import type { GraphqlLoggedInContext } from '@tj-gql/application/services';

export default async function exerciseConnectionResolver(
  _: mixed,
  args: ConnectionArguments,
  { user }: GraphqlLoggedInContext,
): Promise<Connection<ExerciseModel>> {
  // TODO: Use dataloader
  const exercises = await ExerciseModel.getExercises(user.id);
  return connectionFromArray(exercises, args);
}
