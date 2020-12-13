// @flow

import type { Server } from 'msw/node';

export { default as createMockServer } from './create-mock-server';
export { default as Handler } from './handler';

export type MockServer = Server;
