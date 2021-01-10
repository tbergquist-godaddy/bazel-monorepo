// @flow

import { useQuery, type UseQueryResponse } from 'react-query';

import fetch from '../../services/fetch';
import type { MuscleGroup } from '../../program/types';

export const FETCH_MUSCLE_GROUPS = 'FETCH_MUSCLE_GROUPS';

const url = `/Program/muscleGroups/`;

export function fetchMuscleGroups(): Promise<$ReadOnlyArray<MuscleGroup>> {
  return fetch(url);
}

export function useMuscleGroups(): UseQueryResponse<$ReadOnlyArray<MuscleGroup>> {
  return useQuery<$ReadOnlyArray<MuscleGroup>>(FETCH_MUSCLE_GROUPS, fetchMuscleGroups, {
    suspense: true,
  });
}
