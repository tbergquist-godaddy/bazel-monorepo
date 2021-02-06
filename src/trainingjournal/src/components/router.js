// @flow

import { JSResource } from '@tbergq/router';
import { type RouteConfig } from 'react-router-config';
import { QueryClient } from 'react-query';
import { loadQuery } from 'react-relay/hooks';

import { FETCH_DAY_KEY, fetchDay } from '../program/api/fetch-days';
import environment from '../relay/environment';
import { query as ExercisesQuery } from '../exercises/exercises';
import { query as ProgramsQuery } from '../program/programs';
import { query as ProgramQuery } from '../program/program';

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
      return {
        query: loadQuery(
          environment,
          ProgramsQuery,
          {},
          {
            fetchPolicy: 'store-and-network',
          },
        ),
      };
    },
  },
  {
    component: JSResource('Program', () => import('../program/program')),
    path: '/programs/:id',
    exact: true,
    prepare: (data) => {
      const programId = data.id;
      return {
        query: loadQuery(
          environment,
          ProgramQuery,
          {
            id: programId,
          },
          {
            fetchPolicy: 'store-and-network',
          },
        ),
      };
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
      return {
        query: loadQuery(
          environment,
          ExercisesQuery,
          {},
          {
            fetchPolicy: 'store-and-network',
          },
        ),
      };
    },
  },
  {
    component: JSResource('Register', () => import('@tj/register/register')),
    path: '/register/:id',
    exact: true,
    prepare: (data) => {
      queryClient.prefetchQuery([FETCH_DAY_KEY, data.dayId], () => fetchDay(data.id), {
        suspense: true,
      });
      return {};
    },
  },
];

export default routes;
