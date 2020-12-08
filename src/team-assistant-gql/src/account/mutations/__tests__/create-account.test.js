// @flow

import { executeTestQuery } from '@tbergq/graphql-test-utils';

import app from '../../../app';
import connection from '../../../database/connection';

it('works', async () => {
  const res = await executeTestQuery({
    app,
    variables: { email: 'test@test.no', password: '123456' },
    query: `mutation createAccountMutation($email: String!, $password: String!) {
      createAccount(email: $email, password: $password) {
        ... on Identity {
          email
        }
      }
    }`,
  });

  expect(res.body).toEqual({
    data: {
      createAccount: {
        email: 'test@test.no',
      },
    },
  });
  await connection.collection('users').drop();
});

it('gives error for incorrect email', async () => {
  const res = await executeTestQuery({
    app,
    query: `mutation createAccountMutation($email: String!, $password: String!) {
    createAccount(email: $email, password: $password) {
      ... on CreateAccountError {
       reason
       message
      }
    }
  }`,
    variables: { email: 'test', password: '123456' },
  });

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
  const res = await executeTestQuery({
    app,
    query: `mutation createAccountMutation($email: String!, $password: String!) {
    createAccount(email: $email, password: $password) {
      ... on CreateAccountError {
       reason
       message
      }
    }
  }`,
    variables: { email: 'test@test.no', password: '' },
  });

  expect(res.body).toEqual({
    data: {
      createAccount: {
        reason: 'MISSING_PASSWORD',
        message: 'Password is mandatory',
      },
    },
  });
});
