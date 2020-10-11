// @flow

import request from 'supertest';

import app from '../../../app';
import connection from '../../../database/connection';

it('works', async () => {
  const res = await request(app)
    .post('/graphql')
    .send({
      query: `mutation createAccountMutation($email: String!, $password: String!) {
    createAccount(email: $email, password: $password) {
      ... on Identity {
        id
        email
      }
    }
  }`,
      variables: { email: 'test@test.no', password: '123456' },
    })
    .set('content-type', 'application/json');

  expect(res.body).toEqual({
    data: {
      createAccount: {
        email: 'test@test.no',
        id: 'SWRlbnRpdHk6dGVzdEB0ZXN0Lm5v',
      },
    },
  });
  await connection.collection('users').drop();
});

it('gives error for incorrect email', async () => {
  const res = await request(app)
    .post('/graphql')
    .send({
      query: `mutation createAccountMutation($email: String!, $password: String!) {
    createAccount(email: $email, password: $password) {
      ... on CreateAccountError {
       reason
       message
      }
    }
  }`,
      variables: { email: 'test', password: '123456' },
    })
    .set('content-type', 'application/json');

  expect(res.body).toEqual({
    data: {
      createAccount: {
        reason: 'INVALID_EMAIL',
        message: 'test is not a valid email address',
      },
    },
  });
});

it('gives error for missing password', async () => {
  const res = await request(app)
    .post('/graphql')
    .send({
      query: `mutation createAccountMutation($email: String!, $password: String!) {
    createAccount(email: $email, password: $password) {
      ... on CreateAccountError {
       reason
       message
      }
    }
  }`,
      variables: { email: 'test@test.no', password: '' },
    })
    .set('content-type', 'application/json');

  expect(res.body).toEqual({
    data: {
      createAccount: {
        reason: 'MISSING_PASSWORD',
        message: 'Password is mandatory',
      },
    },
  });
});
