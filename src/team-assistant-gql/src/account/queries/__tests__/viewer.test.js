// @flow

import request from 'supertest';

import app from '../../../app';
import connection from '../../../database/connection';
import UserModel from '../../../database/models/users';
import { signToken } from '../../../middleware/auth';

beforeEach(async () => {
  await UserModel.createUser({
    email: 'test@test.no',
    password: '123456',
  });
});

afterEach(async () => {
  await connection.collection('users').drop();
});

it('returns unauthorized for not logged in user', async () => {
  const res = await request(app)
    .post('/graphql')
    .send({
      query: `query viewerQuery {
        viewer {
          __typename
        }
      }`,
    })
    .set('content-type', 'application/json');

  expect(res.body.data.viewer.__typename).toBe('Unauthorized');
});

it('returns user for logged in user', async () => {
  const res = await request(app)
    .post('/graphql')
    .send({
      query: `query viewerQuery {
        viewer {
          ... on User {
            identity {
              email
            }
          }
        }
      }`,
    })
    .set('content-type', 'application/json')
    .set('Authorization', signToken('test@test.no'));

  expect(res.body.data.viewer.identity.email).toBe('test@test.no');
});
