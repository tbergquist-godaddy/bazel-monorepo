// @flow

import fetch from '@adeira/fetch';

type FetchOptions = {|
  +fetchTimeout?: number,
  +retryDelays?: $ReadOnlyArray<number>,
  +headers?: { [key: string]: string },
  +method: 'POST' | 'GET' | 'PATCH' | 'PUT',
|};

const log = (...args: $ReadOnlyArray<string>) => {
  // eslint-disable-next-line no-console
  console.log(...args);
};
const Fetch = async <T>(url: string, options?: FetchOptions): Promise<T> => {
  if (process.env.NODE_ENV === 'development') {
    log(url);
  }

  try {
    const defaultHeaders = {
      'Content-Type': 'application/json',
    };

    const response = await fetch(url, {
      ...options,
      // $FlowExpectedError[incompatible-call]
      headers: {
        ...(options?.headers ?? null),
        ...defaultHeaders,
      },
    });

    const json = await response.json();
    return json;
  } catch (err) {
    log(err);
    throw err;
  }
};

export default Fetch;
