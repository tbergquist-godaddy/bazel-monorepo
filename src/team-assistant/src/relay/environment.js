// @flow

import fetch from '@adeira/fetch';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

import { AUTH_KEY } from '../utils/consts';

// TODO: Move to .env
const url = 'https://team-assistant-gql.now.sh/';
// const url = 'http://localhost:3000/graphql';

function fetchQuery(operation, variables) {
  const token = localStorage.getItem(AUTH_KEY);
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
