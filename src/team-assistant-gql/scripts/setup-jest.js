// @flow

import { MongoMemoryServer } from 'mongodb-memory-server';

import connection from '../src/database/connection';

let server;
const opts = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };

beforeAll(async () => {
  server = new MongoMemoryServer();
  const uri = await server.getUri();

  await connection.openUri(uri, opts);
}, 60000);

afterAll(async () => {
  await server.stop();
  await connection.close();
}, 5000);
