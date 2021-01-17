// @flow

import fetch from '@tj/services/fetch';
import { useQuery, type QueryConfig, type UseQueryResponse } from 'react-query';

import type { DayRegister } from '../types';

const url = '/Workout/registerDay/';

export const FETCH_REGISTER_DAY = 'WORKOUT/FETCH_REGISTER_DAY';

/**
 * Fetches id, start, end time
 */
export function fetchRegisterDay(id: string): Promise<DayRegister> {
  return fetch(`${url}list/${id}/`);
}

export function useRegisterDay<T>(id: string, config?: QueryConfig): UseQueryResponse<T> {
  return useQuery([FETCH_REGISTER_DAY, id], () => fetchRegisterDay(id), config);
}
