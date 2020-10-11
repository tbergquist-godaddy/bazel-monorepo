/* eslint-disable no-console */
// @flow

import connection from './database/connection';
import app from './app';

const uri = process.env.MONGO_DB_URL ?? 'mongodb://127.0.0.1:27017/team_assistant';
connection.openUri(uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
});

app.listen({ port: process.env.PORT ?? 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000/graphql`),
);
