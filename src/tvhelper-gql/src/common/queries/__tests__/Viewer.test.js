// @flow

import request from 'supertest';

import app from '../../../app';
import UserModel from '../../../database/models/user';
import { tvHelperConnection } from '../../../database/connections';
import { signToken } from '../../../tvhelper/account/mutation/Login';

let userId;

beforeEach(async () => {
  const user = await UserModel.createUser({
    password: 'lol',
    username: 'lol',
    email: 'lol',
  });
  userId = user._id;
});

afterEach(async () => {
  await tvHelperConnection.collection('users').drop();
});
it('renders Unauthorized type', async () => {
  const res = await request(app)
    .post('/graphql')
    .send({
      query: `query Viewer {
      viewer {
        __typename
      }
}`,
      variables: {},
    })
    .set('content-type', 'application/json');

  expect(res.body.data).toMatchInlineSnapshot(`
    Object {
      "viewer": Object {
        "__typename": "Unauthorized",
      },
    }
  `);
});

it('renders TVHViewer type', async () => {
  const res = await request(app)
    .post('/graphql')
    .send({
      query: `query Viewer {
        viewer {
          __typename
          ... on TvHelperViewer {
            username
          }
        }
  }`,
      variables: {},
    })
    .set('content-type', 'application/json')
    .set('Authorization', signToken({ id: userId, username: 'lol' }));

  expect(res.body.data).toMatchInlineSnapshot(`
    Object {
      "viewer": Object {
        "__typename": "TvHelperViewer",
        "username": "lol",
      },
    }
  `);
});
