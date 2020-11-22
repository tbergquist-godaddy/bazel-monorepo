// @flow

import { rest } from 'msw';

import responses from './responses';

const handlers: $FlowFixMe = [];

for (const key of Object.keys(responses)) {
  handlers.push(
    rest.get(key, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(responses[key]));
    }),
  );
}

export default handlers;
