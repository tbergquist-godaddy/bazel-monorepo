// @flow

import { Handler } from '@tbergq/mock-server';

import loginHandler from './login-handler';
import createWeek from './create-week';
import fetchBaseExercises from './fetch-base-exercises';
import exerciseHandlers from './exercise';
import programHandlers from './program';

const handlers: Handler[] = [
  ...exerciseHandlers,
  ...programHandlers,
  fetchBaseExercises,
  loginHandler,
  createWeek,
];

export default handlers;
