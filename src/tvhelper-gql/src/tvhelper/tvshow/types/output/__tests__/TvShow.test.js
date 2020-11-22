// @flow

import { toGlobalId } from '@adeira/graphql-relay';

import TvShow from '../TvShow';

const fields = TvShow.getFields();

const { resolve } = fields.isFavorite;

const ancestor = { id: 1 };
const args = null;

describe('tvShow', () => {
  it('returns null when not logged in', async () => {
    // $FlowExpectedError[not-a-function]: Ok for test purpose
    // $FlowExpectedError[incompatible-call]: Ok for test purpose
    expect(await resolve(ancestor, args, { user: null, dataLoader: {} })).toBeNull();
  });

  it('returns true when show is favorite', async () => {
    const user = {
      id: toGlobalId('user', '1'),
    };
    const dataLoader = {
      tvhelper: {
        favorites: {
          load: () => Promise.resolve([{ userId: 1, serieId: 1 }]),
        },
      },
    };
    const context = { user, dataLoader };
    // $FlowExpectedError[not-a-function] Ok for test purpose
    // $FlowExpectedError[incompatible-call] Ok for test purpose
    expect(await resolve(ancestor, args, context)).toBe(true);
  });

  it('returns false when show is not favorite', async () => {
    const user = {
      id: toGlobalId('user', '1'),
    };
    const dataLoader = {
      tvhelper: {
        favorites: {
          load: () => Promise.resolve([]),
        },
      },
    };
    const context = { user, dataLoader };
    // $FlowExpectedError[incompatible-call] Ok for test purpose
    // $FlowExpectedError[not-a-function] Ok for test purpose
    expect(await resolve(ancestor, args, context)).toBe(false);
  });
});
