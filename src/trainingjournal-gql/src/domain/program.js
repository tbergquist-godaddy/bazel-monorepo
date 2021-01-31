// @flow

import { ProgramModel } from '@tj-gql/infrastructure/models';

export function getPrograms(
  userIds: $ReadOnlyArray<string>,
): Promise<$ReadOnlyArray<$ReadOnlyArray<ProgramModel>>> {
  const promises = userIds.map((id) => ProgramModel.getPrograms(id));

  return Promise.all(promises);
}

export async function getProgram(
  ids: $ReadOnlyArray<string>,
  userId: ?string,
): Promise<$ReadOnlyArray<ProgramModel>> {
  const programs = await ProgramModel.getByIds(ids, userId);
  return programs.map((program) => program.toJSON());
}
