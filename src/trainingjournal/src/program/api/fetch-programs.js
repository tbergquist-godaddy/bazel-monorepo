// @flow

import fetch from '@adeira/fetch';

import { TOKEN_KEY } from '../../constants';

const { BASE_URL } = process.env;

type Programs = {
  +id: number,
  +name: string,
};

export async function fetchPrograms(): Promise<Programs[]> {
  const url = `${BASE_URL ?? ''}/Program/programs/`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Token ${localStorage.getItem(TOKEN_KEY) ?? ''}`,
    },
  });
  return res.json();
}

export const FETCH_PROGRAMS_KEY = 'FETCH_PROGRAMS';
