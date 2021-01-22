// @flow

import { executeTestQuery } from '@tbergq/graphql-test-utils';

import app from '../app';

it('works', async () => {
  const res = await executeTestQuery({
    app,
    query: `query appQuery {
    ... on RootQuery {
        __typename
    }
  }`,
    variables: {},
  });

  expect(res.body).toEqual({
    data: {
      __typename: 'RootQuery',
    },
  });
});
