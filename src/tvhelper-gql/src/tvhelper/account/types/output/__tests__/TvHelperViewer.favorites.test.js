// @flow

import { executeTestQuery } from '@tbergq/graphql-test-utils';

import { tvHelperConnection } from '../../../../../database/connections';
import UserRepository from '../../../../../database/models/user';
import FavoritesRepository from '../../../../../database/models/favorites';
import app from '../../../../../app';
import { signToken } from '../../../mutation/Login';

const query = `query FavoritesQuery {
  viewer {
    ... on TvHelperViewer{
      favorites {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
}`;

let userId;

beforeEach(async () => {
  const user = await UserRepository.createUser({
    email: 'lol@lol.no',
    username: 'tito',
    password: 'a',
  });
  userId = user._id;
  await FavoritesRepository.createFavorite(userId, '6');
});

afterEach(async () => {
  await tvHelperConnection.collection('users').drop();
  await tvHelperConnection.collection('favorites').drop();
});

it('renders TJViewer type', async () => {
  const res = await executeTestQuery({ app, query }).set(
    'Authorization',
    signToken({ id: userId, username: 'tito' }),
  );

  expect(res.body.data).toMatchInlineSnapshot(`
    Object {
      "viewer": Object {
        "favorites": Object {
          "edges": Array [
            Object {
              "node": Object {
                "id": "VHZTaG93OjY",
                "name": "The 100",
              },
            },
          ],
        },
      },
    }
  `);
});
