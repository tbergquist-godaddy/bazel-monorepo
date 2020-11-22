// @flow

import path from 'path';
import request from 'supertest';
import fs from 'fs';

import app from '../../app';
import { graphqlConnection } from '../../database/connections';

const query = fs.readFileSync(
  path.join(__dirname, '__fixtures__', 'storedOperation.graphql'),
  'utf-8',
);
it('adds stored operations', async () => {
  const res = await request(app)
    .post('/graphql')
    .send({
      query,
      variables: {},
    })
    .set('content-type', 'application/json');

  expect(res.body.data).toMatchInlineSnapshot(`
    Object {
      "createdStoredOperations": Object {
        "createdOperations": Array [
          Object {
            "operationId": "123",
            "text": "lol",
          },
          Object {
            "operationId": "321",
            "text": "lol2",
          },
        ],
      },
    }
  `);
  await graphqlConnection.collection('persistedqueries').drop();
});
