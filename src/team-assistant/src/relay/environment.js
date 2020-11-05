// @flow

import fetch from '@adeira/fetch';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

// TODO: Move to .env
const url = 'https://team-assistant-gql.now.sh/';
// const url = 'http://localhost:3000/graphql';

function fetchQuery(operation, variables) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
}

const environment: Environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource(), {
    gcReleaseBufferSize: 50,
  }),
});

export default environment;
