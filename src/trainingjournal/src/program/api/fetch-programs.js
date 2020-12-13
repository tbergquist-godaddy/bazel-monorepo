// @flow

import fetch from '../../services/fetch';

type Program = {
  +id: number,
  +name: string,
};

const url = '/Program/programs/';
export function fetchPrograms(): Promise<Program[]> {
  return fetch(url);
}

export const FETCH_PROGRAMS_KEY = 'FETCH_PROGRAMS';
export const CREATE_PROGRAM_KEY = 'CREATE_PROGRAM';

export function createProgram(name: string): Promise<Program> {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ name }),
  });
}
