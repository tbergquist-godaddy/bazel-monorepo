// @flow

import { executeTestQuery } from '@tbergq/graphql-test-utils';

import { tvHelperConnection } from '../../../../database/connections';
import UserRepository from '../../../../database/models/user';
import app from '../../../../app';
import { signToken } from '../../../account/mutation/Login';

let userId;

describe('AddFavorite', () => {
  beforeEach(async () => {
    const user = await UserRepository.createUser({
      username: 'lol',
      password: 'lol',
      email: 'lol@lol.no',
    });
    userId = user._id;
  }, 600000);

  afterEach(async () => {
    await tvHelperConnection.collection('users').drop();
  });
  it('adds a favorite', async () => {
    const res = await executeTestQuery({
      app,
      query: `mutation addFavorite {
      addFavorite(serieId: "dHZzaG93OjY=") {
        success
        tvShow {
          node {
            name
            status
          }
        }
      }
    }`,
    }).set('Authorization', signToken({ id: userId, username: 'lol' }));

    expect(res.body.data).toMatchInlineSnapshot(`
      Object {
        "addFavorite": Object {
          "success": true,
          "tvShow": Object {
            "node": Object {
              "name": "The 100",
              "status": "Ended",
            },
          },
        },
      }
    `);
  });
});
