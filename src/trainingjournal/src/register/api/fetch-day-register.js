// @flow

import fetch from '@tj/services/fetch';
import { useQuery, type QueryConfig, type UseQueryResponse } from 'react-query';

import type { DayRegister } from '../types';

const url = '/Workout/dayregister/';

export const FETCH_DAY_REGISTER = 'FETCH_DAY_REGISTER';

type ID = number | string;

export function fetchDayRegister(id: ID): Promise<$ReadOnlyArray<DayRegister>> {
  return fetch(`${url}${id}/`);
}

export function useDayRegister<T>(id: ?ID, config?: QueryConfig): UseQueryResponse<T | null> {
  const fetchFn = id == null ? () => null : () => fetchDayRegister(id);
  return useQuery([FETCH_DAY_REGISTER, id ?? 'null'], fetchFn, config);
}
