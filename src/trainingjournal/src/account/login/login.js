// @flow

import type { Node } from 'react';
import fbt from 'fbt';
import { Heading } from '@tbergq/components';
import { create } from '@adeira/sx';
import { Helmet } from 'react-helmet';

import LoginForm from './login-form';

export default function Login(): Node {
  return (
    <>
      <Helmet>
        <title>Trainingjournal | login</title>
      </Helmet>
      <div className={styles('container')}>
        <Heading align="center" level="h1">
          <fbt desc="login page heading">Trainingjournal login</fbt>
        </Heading>
        <LoginForm />
      </div>
    </>
  );
}

const styles = create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '600px',
  },
});
