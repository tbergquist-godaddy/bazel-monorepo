// @flow

import TeamModel, { type TeamDoc } from '../../database/models/teams';

export type TeamLoaderType = $ReadOnlyArray<TeamDoc>;

export default function teamsLoader(
  userIds: $ReadOnlyArray<string>,
): Promise<Array<TeamLoaderType>> {
  const promises = userIds.map((userId) => TeamModel.getTeams({ userId }));
  return Promise.all(promises);
}
