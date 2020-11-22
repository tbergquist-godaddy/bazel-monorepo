// @flow

import { setupServer } from 'msw/node';

import handlers from './handlers';

const server: $FlowFixMe = setupServer(...handlers);

export default server;
