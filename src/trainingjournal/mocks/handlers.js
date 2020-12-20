// @flow

import loginHandler from './login-handler';
import createProgram from './create-program';
import fetchProgram from './fetch-program';
import createWeek from './create-week';

const handlers = [loginHandler, createProgram, fetchProgram, createWeek];

export default handlers;
