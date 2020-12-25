// @flow

import type { ComponentType } from 'react';
import { Link } from '@tbergq/router';
import { Helmet } from 'react-helmet';

import useIsLoggedIn from '../services/use-is-logged-in';

type Props = {};

export default (function Home() {
  useIsLoggedIn();
  return (
    <>
      <Helmet>
        <title>Trainingjournal | home</title>
      </Helmet>
      <Link to="/programs">programs</Link>
    </>
  );
}: ComponentType<Props>);
