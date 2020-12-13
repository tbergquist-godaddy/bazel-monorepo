// @flow

import adeiraFetch from '@adeira/fetch';
import { invariant } from '@adeira/js';

import { TOKEN_KEY } from '../constants';

const { BASE_URL } = process.env;

invariant(BASE_URL != null, 'Missing required env variable, BASE_URL');

type FetchOptions = {|
  ...$Exact<RequestOptions>,
  +fetchTimeout?: number,
  +retryDelays?: $ReadOnlyArray<number>,
|};

export default async function fetch<P>(url: string, options?: $Exact<FetchOptions>): Promise<P> {
  const token = localStorage.getItem(TOKEN_KEY);
  const headers = { ...options?.headers };
  if (token != null) {
    // $FlowExpectedError[prop-missing]
    headers.Authorization = `Token ${token}`;
  }

  const res = await adeiraFetch(`${BASE_URL}${url}`, {
    ...options,
    headers,
  });
  return res.json();
}
