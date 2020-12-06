// @flow

import type { Node } from 'react';
import fbt from 'fbt';
import { Heading, Text } from '@tbergq/components';
import { Link } from '@tbergq/router';

import LoginForm from './login-form';
import AccountFormContainer from '../components/account-form-container';

export default function Login(): Node {
  return (
    <AccountFormContainer>
      <Heading level="h1">
        <fbt desc="login header">Login</fbt>
      </Heading>
      <LoginForm />
      <div>
        <Text>
          <fbt desc="signup description">Don&apos;t have an account?</fbt>
        </Text>{' '}
        <Link to="/signup">
          <fbt desc="Signup link">Sign up</fbt>
        </Link>
      </div>
    </AccountFormContainer>
  );
}
