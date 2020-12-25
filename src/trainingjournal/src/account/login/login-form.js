// @flow

import { type Node } from 'react';
import { fbt } from 'fbt';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Input, FormGroup, Button, useShowToast } from '@tbergq/components';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from '@tbergq/router';

import { login } from './api';
import { TOKEN_KEY } from '../../constants';
import { FETCH_USER_DETAILS_KEY } from '../api/fetch-user-details';

const username = fbt('Username', 'username form label');
const password = fbt('Password', 'password form label');
const loginErrorMessage = fbt('Wrong username or password', 'Login error message');

const schema = object().shape({
  password: string().required().label(password),
  username: string().required().label(username),
});

export default function LoginForm(): Node {
  const cache = useQueryClient();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const showToast = useShowToast();

  const { mutate, isLoading } = useMutation(login, {
    onSuccess: (data) => {
      if (data.token) {
        localStorage.setItem(TOKEN_KEY, data.token);
        cache.invalidateQueries(FETCH_USER_DETAILS_KEY);
        navigate('/home');
      }
    },
    onError: () => {
      showToast({ text: loginErrorMessage, type: 'danger' });
    },
  });

  const onSubmit = (formData) => {
    mutate(formData);
  };
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Input
          error={errors.username?.message}
          ref={register}
          name="username"
          type="text"
          label={username}
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
