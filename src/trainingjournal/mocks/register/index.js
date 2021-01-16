// @flow

import { Handler } from '@tbergq/mock-server';

import fetchDayRegister from './day-register';

const registerHandlers: $ReadOnlyArray<Handler> = [fetchDayRegister];

export default registerHandlers;
