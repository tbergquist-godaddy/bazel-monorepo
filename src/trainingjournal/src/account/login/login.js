// @flow

import type { Node } from 'react';
import fbt from 'fbt';
import { Heading } from '@tbergq/components';
import { Helmet } from 'react-helmet';

import LoginForm from './login-form';
import './login.css';

export default function Login(): Node {
  return (
    <>
      <Helmet>
        <title>Trainingjournal | login</title>
      </Helmet>
      <div className="Login__container">
        <Heading align="center" level="h1">
          <fbt desc="login page heading">Trainingjournal login</fbt>
        </Heading>
        <LoginForm />
      </div>
    </>
  );
}
