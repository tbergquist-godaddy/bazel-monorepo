// @flow

import { loadQuery } from 'react-relay/hooks';
import { JSResource } from '@tbergq/router';
import { type RouteConfig } from 'react-router-config';

import environment from '../relay/environment';
import HomeQuery from '../home/__generated__/homeQuery.graphql';
import DashboardQuery from '../dashboard/__generated__/dashboardQuery.graphql';

const queryLoader = loadQuery.loadQuery;

const routes: RouteConfig[] = [
  {
    component: JSResource('Home', () => import('../home/home')),
    path: '/',
    exact: true,
    prepare: () => {
      return {
        query: queryLoader(
          environment,
          HomeQuery,
          {},
          {
            fetchPolicy: 'store-and-network',
          },
        ),
      };
    },
  },
  {
    component: JSResource('Login', () => import('../account/login/login')),
    path: '/login',
    exact: true,
  },
  {
    component: JSResource('Signup', () => import('../account/signup/signup')),
    path: '/signup',
    exact: true,
  },
  {
    component: JSResource('Dashboard', () => import('../dashboard/dashboard')),
    path: '/dashboard',
    exact: true,
    prepare: () => {
      return {
        query: queryLoader(
          environment,
          DashboardQuery,
          {},
          {
            fetchPolicy: 'store-and-network',
          },
        ),
      };
    },
  },
];

export default routes;
