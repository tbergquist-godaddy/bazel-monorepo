// @flow

import { executeTestQuery } from '@tbergq/graphql-test-utils';

import { tvHelperConnection } from '../../../../database/connections';
import UserRepository from '../../../../database/models/user';
import WatchedEpisodeRepository from '../../../../database/models/watched-episode';
import app from '../../../../app';
import { signToken } from '../../../account/mutation/Login';

let userId;

describe('episode mutations', () => {
  beforeEach(async () => {
    const user = await UserRepository.createUser({
      password: 'lol',
      username: 'lol',
      email: 'lol',
    });
    userId = user._id;
    await WatchedEpisodeRepository.markAsWatched(user._id, 6);
  });

  afterEach(async () => {
    await tvHelperConnection.collection('users').drop();
    await tvHelperConnection.collection('watchedepisodes').drop();
  });

  it('marks an episode as watched', async () => {
    const res = await executeTestQuery({
      app,
      query: `mutation mark($id: ID!) {
      markAsWatched(episodeId: $id) {
        success
        episode {
          id
        }
      }
    }`,
      variables: { id: 'ZXBpc29kZToz' },
    }).set('Authorization', signToken({ id: userId, username: 'lol' }));

    expect(res.body.data).toMatchInlineSnapshot(`
      Object {
        "markAsWatched": Object {
          "episode": Object {
            "id": "RXBpc29kZToz",
          },
          "success": true,
        },
      }
    `);
  });

  it('deletes an episode', async () => {
    const res = await executeTestQuery({
      app,
      query: `mutation {
      deleteWatchedEpisode(episodeId: "ZXBpc29kZTo2") {
        success
        episode {
          id
        }
      }
    }`,
    }).set('Authorization', signToken({ id: userId, username: 'lol' }));

    expect(res.body.data).toMatchInlineSnapshot(`
      Object {
        "deleteWatchedEpisode": Object {
          "episode": Object {
            "id": "RXBpc29kZTo2",
          },
          "success": true,
        },
      }
    `);
  });
});
