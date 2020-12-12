// @flow

import { JSResource } from '@tbergq/router';
import { type RouteConfig } from 'react-router-config';

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
    prepare: () => {
      return {
        prepared: {
          data: 'lol',
        },
      };
    },
  },
];

export default routes;
