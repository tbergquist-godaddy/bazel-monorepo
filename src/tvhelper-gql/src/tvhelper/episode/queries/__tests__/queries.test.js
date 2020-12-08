// @flow

import { executeTestQuery } from '@tbergq/graphql-test-utils';

import app from '../../../../app';

const query = `query episode {
  episode(id: "ZXBpc29kZToxMjM=") {
    id
    name
  }
}`;

it('gets an episode', async () => {
  const res = await executeTestQuery({ app, query });
  expect(res.body.data).toMatchInlineSnapshot(`
    Object {
      "episode": Object {
        "id": "RXBpc29kZToxMjM",
        "name": "Trust but Verify",
      },
    }
  `);
});
