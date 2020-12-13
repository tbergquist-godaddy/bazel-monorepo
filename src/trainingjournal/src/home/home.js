// @flow

import type { ComponentType } from 'react';
import { Link } from '@tbergq/router';

import useIsLoggedIn from '../services/use-is-logged-in';

type Props = {};

export default (function Home() {
  useIsLoggedIn();
  return <Link to="/programs">programs</Link>;
}: ComponentType<Props>);
