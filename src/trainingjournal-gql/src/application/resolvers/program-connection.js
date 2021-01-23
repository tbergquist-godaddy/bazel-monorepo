// @flow

import { ProgramModel } from '@tj-gql/infrastructure/models';
import {
  connectionFromArray,
  type ConnectionArguments,
  type Connection,
} from '@adeira/graphql-relay';
import type { GraphqlLoggedInContext } from '@tj-gql/application/services';

export default async function programConnectionResolver(
  _: mixed,
  args: ConnectionArguments,
  { user, dataloader }: GraphqlLoggedInContext,
): Promise<Connection<ProgramModel>> {
  const programs = await dataloader.programs.load(user.id);
  return connectionFromArray(programs, args);
}
