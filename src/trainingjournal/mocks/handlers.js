// @flow

import { Handler } from '@tbergq/mock-server';

import loginHandler from './login-handler';
import createProgram from './create-program';
import fetchProgram from './fetch-program';
import createWeek from './create-week';
import fetchBaseExercises from './fetch-base-exercises';
import exerciseHandlers from './exercise';

const handlers: Handler[] = [
  ...exerciseHandlers,
  fetchBaseExercises,
  loginHandler,
  createProgram,
  fetchProgram,
  createWeek,
];

export default handlers;
