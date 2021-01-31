// @flow

import fetch from '@adeira/fetch';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

import { TOKEN_KEY } from '../services/constants';

const url = 'https://trainingjournal-graphql.now.sh/';
// const url = 'http://localhost:4200';

function fetchQuery(operation, variables) {
  const token = localStorage.getItem(TOKEN_KEY);
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token != null ? { Authorization: token } : null),
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
}

// TODO: Recreate environment when token changes
const environment: Environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource(), {
    gcReleaseBufferSize: 50,
  }),
});

export default environment;
