// @flow

import type { Node } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { object, string } from 'yup';
import { Input, FormGroup, Button, useShowToast } from '@tbergq/components';
import { fbt } from 'fbt';
import { graphql, useMutation } from 'react-relay/hooks';
import { useNavigate } from 'react-router-dom';

import type { loginFormMutation } from './__generated__/loginFormMutation.graphql';
import { AUTH_KEY } from '../../utils/consts';

const email = fbt('email', 'email form label');
const password = fbt('password', 'password form label');

const schema = object().shape({
  password: string().required().label(password),
  email: string().required().email().label(email),
});

export default function LoginForm(): Node {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const showToast = useShowToast();
  const navigate = useNavigate();

  const [login, isLoading] = useMutation<loginFormMutation>(graphql`
    mutation loginFormMutation($password: String!, $email: String!) {
      login(password: $password, email: $email) {
        token
      }
    }
  `);

  const onSubmit = ({ email, password }) => {
    login({
      variables: { email, password },
      onCompleted: (res, err) => {
        const token = res.login.token;
        if (token == null || err != null) {
          showToast({
            text: fbt('Login failed', 'Login failed notification'),
            type: 'danger',
          });
        } else {
          localStorage.setItem(AUTH_KEY, token);
          navigate('/dashboard');
        }
      },
    });
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Input
          error={errors.email?.message}
          ref={register}
          name="email"
          type="email"
          label={email}
        />
      </FormGroup>
      <FormGroup>
        <Input
          error={errors.password?.message}
          ref={register}
          name="password"
          type="password"
          label={password}
        />
      </FormGroup>
      <FormGroup align="right">
        <Button isLoading={isLoading} type="submit">
          <fbt desc="Login button">Login</fbt>
        </Button>
      </FormGroup>
    </form>
  );
}
