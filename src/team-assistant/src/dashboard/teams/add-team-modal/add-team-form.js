// @flow

import { type Node } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { FormGroup, Input, Button } from '@tbergq/components';
import { graphql, useMutation } from 'react-relay/hooks';

import type { addTeamFormMutation } from './__generated__/addTeamFormMutation.graphql';

const schema = object().shape({
  name: string().required().label('Team name'),
});

type Props = {
  +connectionId: ?string,
  +onClose: () => void,
};
export default function AddTeamForm({ connectionId, onClose }: Props): Node {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [createTeam, isLoading] = useMutation<addTeamFormMutation>(graphql`
    mutation addTeamFormMutation($name: String!, $connections: [ID!]!) {
      createTeam(name: $name) {
        __typename
        ... on CreateTeamEdge {
          teamEdge @appendEdge(connections: $connections) {
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
    if (connectionId != null) {
      createTeam({
        variables: { name, connections: [connectionId] },
        onCompleted: () => {
          onClose();
        },
      });
    }
  };

  return (
    <form action="#" onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Input ref={register} name="name" label="Team name" error={errors.name?.message} />
      </FormGroup>
      <FormGroup align="right">
        <Button isLoading={isLoading} type="submit">
          Create team
        </Button>
      </FormGroup>
    </form>
  );
}
