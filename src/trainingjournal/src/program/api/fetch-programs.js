// @flow

import { useState } from 'react';
import { useQuery, type UseQueryResponse, type QueryConfig } from 'react-query';
import fetch from '@tj/services/fetch';

import type { ProgramList, Program } from '../types';

const url = '/Program/programs/';
export function fetchPrograms(): Promise<ProgramList[]> {
  return fetch(url);
}

export const FETCH_PROGRAMS_KEY = 'FETCH_PROGRAMS';
export const FETCH_PROGRAM_KEY = 'FETCH_PROGRAM';
export const CREATE_PROGRAM_KEY = 'CREATE_PROGRAM';
export const FETCH_PAGINATED_PROGRAMS = 'FETCH_PAGINATED_PROGRAMS';

export function createProgram(name: string): Promise<ProgramList> {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ name }),
  });
}

export function fetchProgram(id: number | string): Promise<Program> {
  return fetch(`${url}${id.toString()}/`);
}

export function useProgram<T: ?Program>(
  id: ?(number | string),
  config?: QueryConfig,
): UseQueryResponse<T> {
  const fetchFn = id == null ? () => null : () => fetchProgram(id);
  return useQuery<T>([FETCH_PROGRAM_KEY, id ?? 'null'], fetchFn, config);
}

export function deleteProgram(id: number | string): Promise<void> {
  return fetch(`${url}${id.toString()}/`, {
    method: 'DELETE',
  });
}

type PaginationConfig = {
  +limit?: number,
  +page?: number,
  ...
};

export function paginatePrograms(config?: PaginationConfig = {}): Promise<ProgramList> {
  const { limit = 10, page = 0 } = config;
  return fetch(`${url}?limit=${limit}&offset=${limit * page}`);
}

type UsePaginatedProgramsProps = {
  +initialPage?: number,
  +limit?: number,
  +config?: QueryConfig,
};
type PaginationResponse<T> = {
  +count: number,
  +next: ?string,
  +previous: ?string,
  +results: $ReadOnlyArray<T>,
};

type UsePaginatedPrograms<T> = $ReadOnly<{
  ...UseQueryResponse<PaginationResponse<T>>,
  next: () => void,
  previous: () => void,
}>;

export function usePaginatedPrograms<T>({
  initialPage = 0,
  limit = 10,
  config,
}: UsePaginatedProgramsProps): UsePaginatedPrograms<T> {
  const [page, setPage] = useState(initialPage);
  const query = useQuery<PaginationResponse<T>>(
    [FETCH_PAGINATED_PROGRAMS, page],
    () => paginatePrograms({ limit, page }),
    {
      keepPreviousData: true,
      ...config,
    },
  );
  return {
    ...query,
    next: () => setPage((p) => p + 1),
    previous: () => setPage((p) => p - 1),
  };
}
