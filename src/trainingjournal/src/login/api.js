// @flow

import fetch from '@adeira/fetch';

type Input = {
  +username: string,
  +password: string,
};

type Response = {
  +token: string,
};

const { BASE_URL } = process.env;

export async function login({ username, password }: Input): Promise<Response> {
  const url = BASE_URL ?? '';

  const res = await fetch(`${url}/Account/auth/`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}
