// @flow

import { usePaginatedPrograms, useProgram } from '@tj/program/api/fetch-programs';
import { useDayRegister } from '@tj/register/api/fetch-registered';
import type { ProgramList, Day, Program } from '@tj/program/types';
import type { DayRegister } from '@tj/register/types';

type NextRegister = {
  +day: Day,
  +program: Program,
};

export default function useNextRegister(): NextRegister | null {
  const { data } = usePaginatedPrograms<ProgramList>({ limit: 1, config: { suspense: true } });
  const latestProgram: ?ProgramList = data.results[0];
  const id = latestProgram?.id;

  // TODO: Replace by useQueries to fetch in parallel once https://github.com/tannerlinsley/react-query/issues/1523 has been fixed
  const { data: program } = useProgram<?Program>(id, { suspense: true });
  const { data: register } = useDayRegister<$ReadOnlyArray<DayRegister>>(id, { suspense: true });

  let nextRegister = null;

  if (register == null || program == null) {
    return nextRegister;
  }

  const weeks = program.weeks ?? [];

  for (const week of weeks) {
    for (const day of week.days) {
      const reg = register.find((r) => r.day_program.id === day.id);
      if (reg == null || reg.end_time == null) {
        nextRegister = {
          day,
          program,
        };
        break;
      }
    }
  }
  return nextRegister;
}
