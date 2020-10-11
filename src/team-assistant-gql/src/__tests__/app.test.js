// @flow

import request from 'supertest';

import app from '../app';

it('works', async () => {
  const res = await request(app)
    .post('/graphql')
    .send({
      query: `query testQuery($id: String!) {
    test(id: $id) {
      firstName
      lastName
    }
  }`,
      variables: { id: '123' },
    })
    .set('content-type', 'application/json');

  expect(res.body).toEqual({
    data: {
      test: {
        firstName: 'Tito',
        lastName: 'Bonito',
      },
    },
  });
});
