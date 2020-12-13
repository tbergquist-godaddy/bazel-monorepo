// @flow

import { Handler } from '@tbergq/mock-server';

import responses from './responses';

const handlers: Handler[] = [];

for (const key of Object.keys(responses)) {
  const handler = new Handler({
    url: key,
    type: 'get',
    handler: (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(responses[key]));
    },
  });
  handlers.push(handler);
}

export default handlers;
