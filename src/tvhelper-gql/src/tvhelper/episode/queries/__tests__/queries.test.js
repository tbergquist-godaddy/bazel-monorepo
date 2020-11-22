// @flow

import request from 'supertest';

import app from '../../../../app';

const query = `query episode {
  episode(id: "ZXBpc29kZToxMjM=") {
    id
    name
  }
}`;

it('gets an episode', async () => {
  const res = await request(app)
    .post('/graphql')
    .send({
      query,
      variables: {},
    })
    .set('content-type', 'application/json');
  expect(res.body.data).toMatchInlineSnapshot(`
    Object {
      "episode": Object {
        "id": "RXBpc29kZToxMjM",
        "name": "Trust but Verify",
      },
    }
  `);
});
