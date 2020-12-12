// @flow

import { type Node } from 'react';
import { fbt } from 'fbt';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Input, FormGroup, Button } from '@tbergq/components';

const email = fbt('Email', 'email form label');
const password = fbt('Password', 'password form label');

const schema = object().shape({
  password: string().required().label(password),
  email: string().required().email().label(email),
});

export default function LoginForm(): Node {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {};
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
        <Button type="submit">
          <fbt desc="Login button">Login</fbt>
        </Button>
      </FormGroup>
    </form>
  );
}
