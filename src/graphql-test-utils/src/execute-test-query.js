// @flow

import request, { type SuperTest } from 'supertest';
import { type $Application } from 'express';

type Args = {
  +app: $Application<>,
  +url?: string,
  +variables?: { +[key: string]: mixed },
  +query: string,
};

export default function executeTestQuery({
  app,
  url = '/graphql',
  variables = {},
  query,
}: Args): SuperTest {
  return request(app)
    .post(url)
    .send({
      query,
      variables,
    })
    .set('content-type', 'application/json');
}
