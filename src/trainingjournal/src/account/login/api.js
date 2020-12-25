// @flow

import fetch from '../../services/fetch';

type Input = {
  +username: string,
  +password: string,
};

type Response = {
  +token: string,
};

export function login({ username, password }: Input): Promise<Response> {
  return fetch(`/Account/auth/`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
