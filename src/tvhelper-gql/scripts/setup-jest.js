// @flow

import { graphqlConnection, tvHelperConnection } from '../src/database/connections';
import server from '../mocks/server';

const opts = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };

jest.mock('../src/services/redis');

beforeAll(async () => {
  await tvHelperConnection.openUri('mongodb://127.0.0.1:27017/tvhelper_test', opts);
  await tvHelperConnection.dropDatabase();
  await graphqlConnection.openUri('mongodb://127.0.0.1:27017/graphql_test', opts);
  await graphqlConnection.dropDatabase();

  return server.listen();
});

afterEach(() => server.resetHandlers());

afterAll(() => {
  return Promise.all([graphqlConnection.close(), tvHelperConnection.close(), server.close()]);
});
