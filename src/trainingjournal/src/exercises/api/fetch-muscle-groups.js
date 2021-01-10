// @flow

import { useQuery, type UseQueryResponse, type QueryConfig } from 'react-query';

import fetch from '../../services/fetch';
import type { MuscleGroup } from '../../program/types';

export const FETCH_MUSCLE_GROUPS = 'FETCH_MUSCLE_GROUPS';

const url = `/Program/muscleGroups/`;

export function fetchMuscleGroups(): Promise<$ReadOnlyArray<MuscleGroup>> {
  return fetch(url);
}

export function useMuscleGroups<T>(config?: QueryConfig): UseQueryResponse<T> {
  return useQuery<T>(FETCH_MUSCLE_GROUPS, fetchMuscleGroups, {
    suspense: true,
    ...config,
  });
}
