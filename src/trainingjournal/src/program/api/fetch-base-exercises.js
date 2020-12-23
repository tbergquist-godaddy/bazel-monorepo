// @flow

import { useQuery, type QueryConfig, type UseQueryResponse } from 'react-query';

import fetch from '../../services/fetch';
import type { BaseExercise } from '../types';

export const FETCH_BASE_EXERCISES_KEY = 'FETCH_BASE_EXERCISES';

const url = '/Program/baseExercises/';

export function fetchBaseExercises(): Promise<$ReadOnlyArray<BaseExercise>> {
  return fetch(url);
}

export function useBaseExercises(
  config?: QueryConfig,
): UseQueryResponse<$ReadOnlyArray<BaseExercise>> {
  return useQuery(FETCH_BASE_EXERCISES_KEY, fetchBaseExercises, config);
}
