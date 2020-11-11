// @flow

import request from 'supertest';

import app from '../../../app';
import connection from '../../../database/connection';
import UserModel from '../../../database/models/users';
import { signToken } from '../../../middleware/auth';

const email = 'test@test.no';
let userId;

beforeEach(async () => {
  const user = await UserModel.createUser({
    email,
    password: '123456',
  });
  userId = user._id;
});

afterEach(async () => {
  await connection.collection('users').drop();
});

const query = `mutation createTeamMutation($name: String!) {
  createTeam(name: $name) {
    __typename
    ... on CreateTeamEdge {
      teamEdge {
        node {
          name
        }
      }
    }
    ... on CreateTeamError {
      reason
    }
  }
}`;

it('returns null when not logged in', async () => {
  const res = await request(app)
    .post('/graphql')
    .send({
      query,
      variables: { name: 'Stor Laget' },
    })
    .set('content-type', 'application/json');

  expect(res.body.data.createTeam).toBeNull();
  expect(res.body.errors).toMatchInlineSnapshot(`
    Array [
      Object {
        "locations": Array [
          Object {
            "column": 3,
            "line": 2,
          },
        ],
        "message": "Unauthorized",
        "path": Array [
          "createTeam",
        ],
      },
    ]
  `);
});

it('returns error when name is empty string', async () => {
  const res = await request(app)
    .post('/graphql')
    .send({
      query,
      variables: { name: '' },
    })
    .set('content-type', 'application/json')
    .set('Authorization', signToken({ email, id: userId }));
  expect(res.body.data.createTeam.reason).toBe('NAME_MISSING');
});

it('creates a team', async () => {
  const res = await request(app)
    .post('/graphql')
    .send({
      query,
      variables: { name: 'My team' },
    })
    .set('content-type', 'application/json')
    .set('Authorization', signToken({ email, id: userId }));
  expect(res.body.data.createTeam.teamEdge.node.name).toBe('My team');

  await connection.collection('teams').drop();
});
