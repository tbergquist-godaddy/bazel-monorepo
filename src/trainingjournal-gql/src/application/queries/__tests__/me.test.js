// @flow

import { executeTestQuery } from '@tbergq/graphql-test-utils';
import app from '@tj-gql/application/app';

describe('application / queries / me', () => {
  it('returns null for missing auth', async () => {
    const res = await executeTestQuery({
      app,
      query: `query meQuery {
        me {
          email
        }
  }`,
      variables: {},
    });

    expect(res.body).toEqual({
      data: {
        me: null,
      },
    });
  });

  it('returns returns email and id when auth is set', async () => {
    const res = await executeTestQuery({
      app,
      query: `query meQuery {
        me {
          id
          email
        }
  }`,
      variables: {},
    }).set('authorization', JSON.stringify({ id: '123', email: 'test@test.no' }));

    expect(res.body).toEqual({
      data: {
        me: {
          id: 'TWU6MTIz',
          email: 'test@test.no',
        },
      },
    });
  });
});
