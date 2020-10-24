// @flow

import type { Node } from 'react';
import { useHref } from 'react-router-dom';
import fbt from 'fbt';
import { Heading, Link, Text } from '@tbergq/components';

import useInjectSxStyles from '../../components/use-inject-sx-styles';
import LoginForm from './login-form';
import AccountFormContainer from '../components/account-form-container';

export default function Login(): Node {
  useInjectSxStyles();
  const href = useHref('/signup');

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
        <Link href={href}>
          <fbt desc="Signup link">Sign up</fbt>
        </Link>
      </div>
    </AccountFormContainer>
  );
}
