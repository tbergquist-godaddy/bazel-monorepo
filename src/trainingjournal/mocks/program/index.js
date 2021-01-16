// @flow

import { Handler } from '@tbergq/mock-server';

import createProgram from './create-program';
import fetchProgram from './fetch-program';
import fetchPrograms from './fetch-programs';

const programHandlers: $ReadOnlyArray<Handler> = [createProgram, fetchProgram, fetchPrograms];

export default programHandlers;
