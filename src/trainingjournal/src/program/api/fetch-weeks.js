// @flow

import fetch from '../../services/fetch';

export const CREATE_WEEK_KEY = 'CREATE_WEEK';

type CreateWeekResponse = {
  +id: number,
  +name: string,
};

const url = `/Program/weeks/`;

export function createWeek(program: number | string, name: string): Promise<CreateWeekResponse> {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ program, name }),
  });
}
