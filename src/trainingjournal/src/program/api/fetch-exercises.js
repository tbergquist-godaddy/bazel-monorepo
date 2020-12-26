// @flow

import fetch from '../../services/fetch';
import type { Exercise } from '../types';

export const FETCH_BASE_EXERCISES_KEY = 'FETCH_BASE_EXERCISES';

const url = '/Program/exercises/';

type CreateExerciseInput = $ReadOnly<{
  base_exercise: string,
  break_time: string,
  day: number | string,
  description: string,
  reps: string,
  set: string,
}>;

export function createExercise(input: CreateExerciseInput): Promise<Exercise> {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(input),
  });
}

type EditExerciseInput = $ReadOnly<{
  ...CreateExerciseInput,
  id: number,
  day: number,
}>;

export function editExercise(input: EditExerciseInput): Promise<Exercise> {
  return fetch(`${url}${input.id}/`, {
    method: 'PUT',
    body: JSON.stringify(input),
  });
}
