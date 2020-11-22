// @flow

import { invariant } from '@adeira/js';

import { tvHelperConnection, graphqlConnection } from './database/connections';
import loadConfig from './services/load-config';
import app from './app';

loadConfig();

const { PORT, DB_URL: TVHELPER_DB_URL, GRAPHQL_DB_URL } = process.env;

invariant(TVHELPER_DB_URL != null, 'Expected to have db url for tvhelper, but did not.');
invariant(GRAPHQL_DB_URL != null, 'Expected to have db url for graphql, but did not.');
const opts = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };

tvHelperConnection.openUri(TVHELPER_DB_URL, opts);

graphqlConnection.openUri(GRAPHQL_DB_URL, opts);

if (process.env.NODE_ENV === 'production') {
  app.listen();
} else {
  app.listen(PORT ?? 3001);
}

console.log(`app running on http://localhost:${PORT ?? '3001'}`); // eslint-disable-line no-console
