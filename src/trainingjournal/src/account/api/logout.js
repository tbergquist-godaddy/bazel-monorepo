// @flow

import fetch from '../../services/fetch';

export default function logout(): Promise<void> {
  return fetch('/Account/logout/');
}
