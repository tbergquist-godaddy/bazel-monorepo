// @flow

import type { Node } from 'react';
import { FormGroup, Input, Heading, Button, useShowToast } from '@tbergq/components';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { fbt } from 'fbt';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from 'react-query';

import { createProgram, FETCH_PROGRAMS_KEY } from '../api/fetch-programs';

const name = fbt('Name', 'add program form name label');

const schema = object().shape({
  name: string().required().label(name),
});

type Props = {
  closeModal: () => void,
};

export default function AddProgramForm({ closeModal }: Props): Node {
  const showToast = useShowToast();
  const cache = useQueryClient();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const { mutate, isLoading } = useMutation(createProgram, {
    onSuccess: () => {
      cache.invalidateQueries(FETCH_PROGRAMS_KEY);
      showToast({ text: fbt('Program was successfully created', 'program created toast') });
      closeModal();
    },
    onError: () => {
      showToast({ text: fbt('Failed to create program', 'program error toast'), type: 'danger' });
    },
  });
  const onSubmit = ({ name }) => {
    mutate(name);
  };

  return (
    <>
      <FormGroup align="center">
        <Heading level="h2" as="h4">
          <fbt desc="create program heading">Create program</fbt>
        </Heading>
      </FormGroup>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Input error={errors.name?.message} ref={register} name="name" label={name} />
        </FormGroup>
        <FormGroup align="right">
          <Button isLoading={isLoading} type="submit">
            <fbt desc="create program button">Create program</fbt>
          </Button>
        </FormGroup>
      </form>
    </>
  );
}
