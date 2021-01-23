// @flow

import { ProgramModel } from '@tj-gql/infrastructure/models';

export function getPrograms(
  userIds: $ReadOnlyArray<string>,
): Promise<$ReadOnlyArray<$ReadOnlyArray<ProgramModel>>> {
  const promises = userIds.map((id) => ProgramModel.getPrograms(id));

  return Promise.all(promises);
}
