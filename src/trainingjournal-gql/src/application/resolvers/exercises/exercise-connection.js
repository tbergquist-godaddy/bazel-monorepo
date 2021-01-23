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
  { user, dataloader }: GraphqlLoggedInContext,
): Promise<Connection<ExerciseModel>> {
  const exercises = await dataloader.exercises.load(user.id);
  return connectionFromArray(exercises, args);
}
