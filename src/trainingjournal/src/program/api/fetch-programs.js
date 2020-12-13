// @flow

import fetch from '../../services/fetch';

type Programs = {
  +id: number,
  +name: string,
};

export function fetchPrograms(): Promise<Programs[]> {
  return fetch('/Program/programs/');
}

export const FETCH_PROGRAMS_KEY = 'FETCH_PROGRAMS';
