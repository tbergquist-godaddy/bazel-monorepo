// @flow

import type { ComponentType } from 'react';
import { Link } from '@tbergq/router';

type Props = {};

export default (function Home() {
  return <Link to="/programs">programs</Link>;
}: ComponentType<Props>);
