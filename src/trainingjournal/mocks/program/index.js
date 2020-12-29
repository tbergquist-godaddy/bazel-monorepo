// @flow

import { Handler } from '@tbergq/mock-server';

import createProgram from './create-program';
import fetchProgram from './fetch-program';

const programHandlers: $ReadOnlyArray<Handler> = [createProgram, fetchProgram];

export default programHandlers;
