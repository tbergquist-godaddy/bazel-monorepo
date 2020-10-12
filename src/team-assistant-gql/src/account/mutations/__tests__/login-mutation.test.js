// @flow

import request from 'supertest';

import app from '../../../app';
import connection from '../../../database/connection';
import UserModel from '../../../database/models/users';

beforeEach(async () => {
  await UserModel.createUser({
    email: 'test@test.no',
    password: '123456',
  });
});

afterEach(async () => {
  await connection.collection('users').drop();
});

it('returns null for not existing user', async () => {
  const res = await request(app)
    .post('/graphql')
    .send({
      query: `mutation login($email: String!, $password: String!) {
        login(email:$email, password:$password) {
          token
        }
      }`,
      variables: { email: 'test1@test.no', password: '123456' },
    })
    .set('content-type', 'application/json');

  expect(res.body.data.login).toEqual({
    token: null,
  });
});

it('returns a token existing user', async () => {
  const res = await request(app)
    .post('/graphql')
    .send({
      query: `mutation login($email: String!, $password: String!) {
        login(email:$email, password:$password) {
          token
        }
      }`,
      variables: { email: 'test@test.no', password: '123456' },
    })
    .set('content-type', 'application/json');

  expect(res.body.data.login).not.toBeNull();
});
