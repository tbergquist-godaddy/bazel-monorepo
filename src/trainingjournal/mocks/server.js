// @flow

import { createMockServer, type MockServer } from '@tbergq/mock-server';

import handlers from './handlers';

const server: MockServer = createMockServer(handlers);

export default server;
