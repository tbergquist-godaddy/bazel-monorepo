// @flow

import { useEffect } from 'react';
import { useNavigate } from '@tbergq/router';

import { AUTH_KEY } from '../utils/consts';

export default function useIsLoggedIn() {
  const token = localStorage.getItem(AUTH_KEY);
  const navigate = useNavigate();

  useEffect(() => {
    if (token == null) {
      navigate('/login');
    }
  }, [token, navigate]);
}
