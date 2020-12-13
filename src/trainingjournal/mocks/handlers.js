// @flow

import { rest } from 'msw';
import { invariant } from '@adeira/js';

import { post } from './responses';

const handlers: $FlowFixMe = [];

const { BASE_URL } = process.env;

invariant(BASE_URL != null, 'Missing required env variable BASE_URL');

for (const key of Object.keys(post)) {
  const { url, handler } = post[key];
  handlers.push(rest.post(`${BASE_URL}${url}`, handler));
}

export default handlers;
