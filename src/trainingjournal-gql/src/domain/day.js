// @flow

import { ProgramModel, DayModel } from '@tj-gql/infrastructure/models';

export async function getDays(
  ids: $ReadOnlyArray<string>,
  userId: ?string,
): Promise<$ReadOnlyArray<DayModel>> {
  const days = await ProgramModel.getDayByIds(ids, userId);
  return days.map((program) => program.toJSON());
}
