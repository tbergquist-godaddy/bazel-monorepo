// @flow

import fetch, { nullFetcher } from '@tj/services/fetch';
import { useQuery, type QueryConfig, type UseQueryResponse } from 'react-query';

const url = '/Workout/';

export const FETCH_LAST_REGISTERED = 'WORKOUT/FETCH_LAST_REGISTERED';

function fetchLastRegistered(dayRegisterId: string, baseExerciseId: string) {
  return fetch(
    `${url}lastRegistered/?day_register_id=${dayRegisterId}&base_exercise_id=${baseExerciseId}`,
  );
}

type UseLastRegisteredProps = {
  +dayRegisterId: ?string,
  +baseExerciseId: ?string,
};

export function useLastRegistered<T>(
  { dayRegisterId, baseExerciseId }: UseLastRegisteredProps,
  config?: QueryConfig,
): UseQueryResponse<T> {
  const fetchFn =
    dayRegisterId == null || baseExerciseId == null ? nullFetcher : fetchLastRegistered;
  return useQuery(
    [FETCH_LAST_REGISTERED, dayRegisterId, baseExerciseId],
    () => fetchFn(dayRegisterId ?? '', baseExerciseId ?? ''),
    config,
  );
}
