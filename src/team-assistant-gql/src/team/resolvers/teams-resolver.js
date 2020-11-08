// @flow

import { type ConnectionArguments, connectionFromArray } from '@adeira/graphql-relay';

import type { Context } from '../../context';

export default async function TeamsResolver(
  _: mixed,
  args: ConnectionArguments,
  { user, dataloader }: Context,
): any {
  if (user == null) {
    throw new Error('You cannot access your teams without being logged in');
  }
  const teams = await dataloader.teams.teamsLoader.load(user.email);
  return connectionFromArray<any>(teams, args);
}
