// @flow

import { executeTestQuery } from '@tbergq/graphql-test-utils';

import app from '../../../app';
import connection from '../../../database/connection';
import UserModel from '../../../database/models/users';
import TeamModel from '../../../database/models/teams';
import { signToken } from '../../../middleware/auth';

let userId;

beforeEach(async () => {
  const user = await UserModel.createUser({
    email: 'test@test.no',
    password: '123456',
  });
  userId = user._id;
});

afterEach(async () => {
  await connection.collection('users').drop();
});

it('works for users with no teams', async () => {
  const res = await executeTestQuery({
    app,
    query: `query viewerQuery {
    viewer {
      ... on User {
        teams {
          edges {
            node {
              name
            }
          }
        }
      }
    }
  }`,
  }).set('Authorization', signToken({ email: 'test@test.no', id: userId }));

  expect(res.body.data).toMatchInlineSnapshot(`
    Object {
      "viewer": Object {
        "teams": Object {
          "edges": Array [],
        },
      },
    }
  `);
});

it('returns teams', async () => {
  await TeamModel.createTeam({ userId, name: 'Test team' });
  const res = await executeTestQuery({
    app,
    query: `query viewerQuery {
    viewer {
      ... on User {
        teams {
          edges {
            node {
              name
            }
          }
        }
      }
    }
  }`,
  }).set('Authorization', signToken({ email: 'test@test.no', id: userId }));

  expect(res.body.data).toMatchInlineSnapshot(`
    Object {
      "viewer": Object {
        "teams": Object {
          "edges": Array [
            Object {
              "node": Object {
                "name": "Test team",
              },
            },
          ],
        },
      },
    }
  `);
  await connection.collection('teams').drop();
});
