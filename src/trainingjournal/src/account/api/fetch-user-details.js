// @flow

import { TOKEN_KEY } from '@tj/services/constants';

import fetch from '../../services/fetch';

export const FETCH_USER_DETAILS_KEY = 'fetch-user-details';

type UserDetails = {
  +username: string,
  +email: string,
};

export default async function fetchUserDetails(): Promise<UserDetails | null> {
  try {
    const res = await fetch('/Account/userInfo/', {
      retryDelays: [],
    });
    return res;
  } catch {
    localStorage.removeItem(TOKEN_KEY);
    return null;
  }
}
