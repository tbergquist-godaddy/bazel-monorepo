// @flow

import connection from '../src/infrastructure/connection';

const opts = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };

beforeAll(async () => {
  await connection.openUri('mongodb://127.0.0.1:27017/trainingjournal_test', opts);
  await connection.dropDatabase();
});

afterAll(() => {
  return connection.close();
});
