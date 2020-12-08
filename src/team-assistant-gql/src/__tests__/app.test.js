// @flow

import { executeTestQuery } from '@tbergq/graphql-test-utils';

import app from '../app';

it('works', async () => {
  const res = await executeTestQuery({
    app,
    query: `query testQuery($id: String!) {
    test(id: $id) {
      firstName
      lastName
    }
  }`,
    variables: { id: '123' },
  });

  expect(res.body).toEqual({
    data: {
      test: {
        firstName: 'Tito',
        lastName: 'Bonito',
      },
    },
  });
});
