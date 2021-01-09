// @flow

import { JSResource } from '@tbergq/router';
import { type RouteConfig } from 'react-router-config';
import { QueryClient } from 'react-query';

import {
  FETCH_PROGRAMS_KEY,
  fetchPrograms,
  fetchProgram,
  FETCH_PROGRAM_KEY,
} from '../program/api/fetch-programs';
import { FETCH_DAY_KEY, fetchDay } from '../program/api/fetch-days';
import { FETCH_BASE_EXERCISES, fetchBaseExercises } from '../exercises/api/fetch-exercises';

export const queryClient: QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    },
  },
});

const routes: RouteConfig[] = [
  {
    component: JSResource('LandingPage', () => import('../landing/landing-page')),
    path: '/',
    exact: true,
  },
  {
    component: JSResource('Login', () => import('../account/login/login')),
    path: '/account/login',
    exact: true,
  },
  {
    component: JSResource('Home', () => import('../home/home')),
    path: '/home',
    exact: true,
  },
  {
    component: JSResource('Programs', () => import('../program/programs')),
    path: '/programs',
    exact: true,
    prepare: () => {
      queryClient.prefetchQuery(FETCH_PROGRAMS_KEY, fetchPrograms, { suspense: true });
      return {};
    },
  },
  {
    component: JSResource('Program', () => import('../program/program')),
    path: '/programs/:id',
    exact: true,
    prepare: (data) => {
      queryClient.prefetchQuery([FETCH_PROGRAM_KEY, data.id], () => fetchProgram(data.id), {
        suspense: true,
      });
      return {};
    },
  },
  {
    component: JSResource('DayDetail', () => import('../program/day/day-detail')),
    path: '/programs/:programId/day/:dayId',
    exact: true,
    prepare: (data) => {
      queryClient.prefetchQuery([FETCH_DAY_KEY, data.dayId], () => fetchDay(data.dayId), {
        suspense: true,
      });
      return {};
    },
  },
  {
    component: JSResource('Exercises', () => import('../exercises/exercises')),
    path: '/exercises',
    exact: true,
    prepare: () => {
      queryClient.prefetchQuery(FETCH_BASE_EXERCISES, fetchBaseExercises, {
        suspense: true,
      });
      return {};
    },
  },
];

export default routes;
