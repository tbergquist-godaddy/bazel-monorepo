// @flow

import { JSResource } from '@tbergq/router';
import { type RouteConfig } from 'react-router-config';

const routes: RouteConfig[] = [
  {
    component: JSResource('Login', () => import('../login/login')),
    path: '/',
    exact: true,
  },
];

export default routes;
