// @flow

import {
  useQuery,
  type UseQueryResponse,
  useMutation,
  type MutationResponse,
  useQueryClient,
} from 'react-query';
import fetch from '@tj/services/fetch';

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

type CreateExerciseInput = {
  +description: string,
  +name: string,
  +youtube_link: string,
  +muscle_group: number,
};

export function createBaseExercise(input: CreateExerciseInput): Promise<BaseExercise> {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(input),
  });
}

type UseBaseExerciseConfig = {
  +onSuccess?: () => void,
};
export function useCreateBaseExercise(config?: UseBaseExerciseConfig): MutationResponse {
  const cache = useQueryClient();
  return useMutation(createBaseExercise, {
    onSuccess: () => {
      cache.invalidateQueries(FETCH_BASE_EXERCISES);
      if (config?.onSuccess != null) {
        config.onSuccess();
      }
    },
  });
}
