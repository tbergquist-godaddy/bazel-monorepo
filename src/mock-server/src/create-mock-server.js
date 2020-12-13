// @flow

import { setupServer, type Server } from 'msw/node';
import { rest } from 'msw';

import Handler from './handler';

export default function createMockServer(handlers: Handler[]): Server {
  const mockHandlers = [];

  for (const handler of handlers) {
    mockHandlers.push(rest[handler.type](handler.url, handler.handler));
  }

  return setupServer(...mockHandlers);
}
