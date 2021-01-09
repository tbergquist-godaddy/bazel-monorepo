// @flow

import { useQuery, type UseQueryResponse } from 'react-query';

import fetch from '../../services/fetch';
import type { BaseExercise } from '../../program/types';

export const FETCH_BASE_EXERCISES = 'FETCH_BASE_EXERCISES';

const url = '/Program/baseExercises/';

type ExerciseList = $ReadOnlyArray<BaseExercise>;

export function fetchBaseExercises(): Promise<ExerciseList> {
  return fetch(url);
}

export function useBaseExercises(): UseQueryResponse<ExerciseList> {
  return useQuery<ExerciseList>(FETCH_BASE_EXERCISES, fetchBaseExercises, {
    suspense: true,
  });
}
