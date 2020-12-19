// @flow

import fetch from '../../services/fetch';

type ProgramList = {
  +id: number,
  +name: string,
};

const url = '/Program/programs/';
export function fetchPrograms(): Promise<ProgramList[]> {
  return fetch(url);
}

export const FETCH_PROGRAMS_KEY = 'FETCH_PROGRAMS';
export const FETCH_PROGRAM_KEY = 'FETCH_PROGRAM';
export const CREATE_PROGRAM_KEY = 'CREATE_PROGRAM';

export function createProgram(name: string): Promise<ProgramList> {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ name }),
  });
}

type Program = $ReadOnly<{
  ...ProgramList,
  +weeks: $ReadOnlyArray<{
    +id: number,
    +name: string,
    +days: $ReadOnlyArray<{
      +id: number,
      +name: string,
      +exercises: $ReadOnlyArray<{
        +id: number,
        +set: string,
        +reps: string,
        +break_time: string,
        +base_exercise: {
          +id: number,
          +name: string,
        },
      }>,
    }>,
  }>,
}>;

export function fetchProgram(id: number | string): Promise<Program> {
  return fetch(`${url}${id.toString()}/`);
}
