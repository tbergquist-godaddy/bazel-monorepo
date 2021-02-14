// @flow

import { ProgramModel, DayModel } from '@tj-gql/infrastructure/models';

export async function getDays(
  ids: $ReadOnlyArray<string>,
  userId: ?string,
): Promise<$ReadOnlyArray<DayModel | null>> {
  const programs = await ProgramModel.getDayByIds(ids, userId);
  const days = [];

  outer: for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    for (const program of programs) {
      for (const week of program.weeks) {
        for (const day of week.days) {
          if (day._id.toString() === id) {
            days.push(day.toJSON());
            continue outer;
          }
        }
      }
    }
    // if we got here, then we didn't find the day, could belong to different user 🤷‍♂️
    days.push(null);
  }

  return days;
}
