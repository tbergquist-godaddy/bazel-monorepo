// @flow

import * as React from 'react';
import { Heading, Input, FormGroup, Button, useShowToast } from '@tbergq/components';
import { fbt } from 'fbt';
import { graphql, useMutation } from 'react-relay/hooks';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { object, string, ref } from 'yup';
import { useNavigate } from 'react-router-dom';

import useInjectSxStyles from '../../components/use-inject-sx-styles';
import type { signupMutation as SignupMutation } from './__generated__/signupMutation.graphql';
import AccountFormContainer from '../components/account-form-container';

const email = fbt('email', 'email form label');
const password = fbt('password', 'password form label');
const confirmPassword = fbt('confirm password', 'confirmPassword form label');
const passwordsMustMatch = fbt('Passwords must match', 'password mismatch error message');

const schema = object().shape({
  password: string().required().label(password),
  confirmPassword: string()
    .label(confirmPassword)
    .required()
    .oneOf([ref('password'), null], passwordsMustMatch),
  email: string().required().email().label(email),
});

export default function Signup(): React.Node {
  const navigate = useNavigate();
  const showToast = useShowToast();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  useInjectSxStyles();

  const [signUp, isLoading] = useMutation<SignupMutation>(graphql`
    mutation signupMutation($password: String!, $email: String!) {
      createAccount(password: $password, email: $email) {
        ... on Identity {
          __typename
        }
        ... on CreateAccountError {
          reason
        }
      }
    }
  `);

  const onSubmit = ({ email, password }) => {
    signUp({
      variables: { password, email },
      onCompleted: (res, err) => {
        const reason = res.createAccount.reason;
        if (reason != null || err != null) {
          showToast({
            text:
              reason === 'EMAIL_EXISTS'
                ? fbt('Email already exists', 'notification that email exists')
                : fbt(
                    'Failed to create account, please refresh the page or try again later',
                    'notification about unknown create error',
                  ),
            type: 'danger',
          });
        } else {
          showToast({
            text: fbt(
              'Account created successfully',
              'notification that account creation was successful',
            ),
          });
          navigate('/login');
        }
      },
    });
  };

  return (
    <AccountFormContainer>
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <Heading level="h1">
          <fbt desc="Create new account title">Create new account</fbt>
        </Heading>
        <FormGroup>
          <Input
            ref={register}
            name="email"
            type="email"
            label={email}
            error={errors.email?.message}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            label={password}
            name="password"
            ref={register}
            error={errors.password?.message}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            label={confirmPassword}
            name="confirmPassword"
            ref={register}
            error={errors.confirmPassword?.message}
          />
        </FormGroup>
        <FormGroup align="right">
          <Button isLoading={isLoading} type="submit">
            <fbt desc="Submit button to create an account">Create account</fbt>
          </Button>
        </FormGroup>
      </form>
    </AccountFormContainer>
  );
}
