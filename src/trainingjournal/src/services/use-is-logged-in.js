// @flow

import { useEffect } from 'react';

import { TOKEN_KEY } from '../constants';

export default function useIsLoggedIn() {
  const token = localStorage.getItem(TOKEN_KEY);

  useEffect(() => {
    if (token == null) {
      localStorage.removeItem(TOKEN_KEY);
      // We need a hard reset, since cache.clear() triggers refetch of queries, https://github.com/tannerlinsley/react-query/discussions/431
      window.location.href = '/';
    }
  }, [token]);
}
