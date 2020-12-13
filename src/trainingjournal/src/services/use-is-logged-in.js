// @flow

import { useNavigate } from '@tbergq/router';

import { TOKEN_KEY } from '../constants';

export default function useIsLoggedIn() {
  const token = localStorage.getItem(TOKEN_KEY);
  const navigate = useNavigate();

  if (token == null) {
    navigate('/');
  }
}
