// @flow

import type { Node } from 'react';
import { FormGroup, Input, Heading, Button, useShowToast } from '@tbergq/components';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { fbt } from 'fbt';
import { yupResolver } from '@hookform/resolvers/yup';
import { graphql, useMutation } from 'react-relay/hooks';

import type { addProgramFormMutation } from './__generated__/addProgramFormMutation.graphql';

const name = fbt('Name', 'add program form name label');

const schema = object().shape({
  name: string().required().label(name),
});

type Props = {
  +closeModal: () => void,
  +connectionId: ?string,
};

export default function AddProgramForm({ closeModal, connectionId }: Props): Node {
  const showToast = useShowToast();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [mutate, isLoading] = useMutation<addProgramFormMutation>(graphql`
    mutation addProgramFormMutation($program: CreateProgramInput!, $connections: [ID!]!) {
      createProgram(program: $program) {
        __typename
        ... on CreateProgram {
          programEdge @appendEdge(connections: $connections) {
            node {
              id
              name
            }
          }
        }
      }
    }
  `);

  const onSubmit = ({ name }) => {
    mutate({
      variables: { program: { name }, connections: [connectionId ?? ''] },
      onCompleted: (data, error) => {
        if (error || data.createProgram?.__typename !== 'CreateProgram') {
          showToast({
            text: fbt('Failed to create program', 'program error toast'),
            type: 'danger',
          });
        } else {
          showToast({ text: fbt('Program was successfully created', 'program created toast') });
          closeModal();
        }
      },
    });
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
