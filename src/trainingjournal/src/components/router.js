// @flow

import { JSResource } from '@tbergq/router';
import { type RouteConfig } from 'react-router-config';
import { QueryCache } from 'react-query';

import { FETCH_PROGRAMS_KEY, fetchPrograms } from '../program/api/fetch-programs';

export const cache: $FlowFixMe = new QueryCache();
const routes: RouteConfig[] = [
  {
    component: JSResource('Login', () => import('../login/login')),
    path: '/',
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
      cache.prefetchQuery(FETCH_PROGRAMS_KEY, fetchPrograms, { suspense: true });
      return {};
    },
  },
];

export default routes;
