// @flow

/* eslint-disable no-console */

import connection from '@tj-gql/infrastructure/connection';

import app from './app';

const uri = process.env.MONGO_DB_URL ?? 'mongodb://127.0.0.1:27017/trainingjournal';

connection.openUri(uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

if (__DEV__) {
  app.listen({ port: process.env.PORT ?? 4200 }, () =>
    console.log(`🚀 Server ready at http://localhost:4200/graphql`),
  );
} else {
  app.listen();
}
