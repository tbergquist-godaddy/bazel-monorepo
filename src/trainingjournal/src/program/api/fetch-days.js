// @flow

import { useQuery, type QueryConfig, type UseQueryResponse } from 'react-query';

import fetch from '../../services/fetch';
import type { Day } from '../types';

type CreateDayResponse = {
  +id: number,
  +name: string,
};

const url = `/Program/days/`;

type CreateDayInput = {
  +week: number,
  +name: string,
};

export function createDay(input: CreateDayInput): Promise<CreateDayResponse> {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(input),
  });
}

export const FETCH_DAY_KEY = 'FETCH_DAY';

export function fetchDay(id: string | number): Promise<Day> {
  return fetch(`${url}${id}/`);
}

export function useFetchDay(id: string | number, config: QueryConfig): UseQueryResponse<Day> {
  return useQuery([FETCH_DAY_KEY, id], () => fetchDay(id), config);
}

export function deleteDay(id: string | number): Promise<void> {
  return fetch(`${url}${id}/`, {
    method: 'DELETE',
  });
}
