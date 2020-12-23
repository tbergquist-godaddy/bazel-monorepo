// @flow

import loginHandler from './login-handler';
import createProgram from './create-program';
import fetchProgram from './fetch-program';
import createWeek from './create-week';
import fetchBaseExercises from './fetch-base-exercises';
import createExercise from './create-exercise';

const handlers = [
  createExercise,
  fetchBaseExercises,
  loginHandler,
  createProgram,
  fetchProgram,
  createWeek,
];

export default handlers;
