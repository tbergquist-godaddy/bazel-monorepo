// @flow

import { useNavigate } from '@tbergq/router';
import { useQueryClient } from 'react-query';

import { TOKEN_KEY } from '../constants';

export default function useIsLoggedIn() {
  const token = localStorage.getItem(TOKEN_KEY);
  const navigate = useNavigate();
  const cache = useQueryClient();

  if (token == null) {
    navigate('/');
    cache.clear();
    localStorage.removeItem(TOKEN_KEY);
  }
}
