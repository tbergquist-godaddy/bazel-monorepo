// @flow

import { type Node, useState } from 'react';
import { Button, Confirm, useShowToast } from '@tbergq/components';
import { fbt } from 'fbt';
import { useNavigate } from '@tbergq/router';
import { graphql, useFragment, useMutation } from 'react-relay/hooks';

import type { deleteProgram_program$key as Program } from './__generated__/deleteProgram_program.graphql';
import type { deleteProgramMutation } from './__generated__/deleteProgramMutation.graphql';

type Props = {
  +program: ?Program,
  +connectionId: ?string,
};

export default function DeleteProgram({ program, connectionId }: Props): Node {
  const showToast = useShowToast();
  const data = useFragment(
    graphql`
      fragment deleteProgram_program on Program {
        id
        name
      }
    `,
    program,
  );
  const [mutate, isLoading] = useMutation<deleteProgramMutation>(graphql`
    mutation deleteProgramMutation($id: ID!, $connections: [ID!]!) {
      deleteProgram(id: $id) {
        id @deleteEdge(connections: $connections)
        success
      }
    }
  `);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const onDelete = () => {
    mutate({
      variables: { id: data?.id ?? '', connections: [connectionId ?? ''] },
      onCompleted: (data, error) => {
        if (data.deleteProgram?.success !== true || error) {
          showToast({
            text: fbt('Failed to delete program, please try again', 'Delete program error'),
            type: 'danger',
          });
        } else {
          showToast({ text: fbt('Program successfully deleted', 'Program deleted success') });
          navigate('/programs');
        }
      },
    });
  };

  return (
    <>
      <Button
        isLoading={isLoading}
        onClick={() => setIsVisible(true)}
        fullWidth="mediumMobile"
        variant="danger"
      >
        <fbt desc="delete program button">Delete program</fbt>
      </Button>
      <Confirm
        title={fbt('Confirm delete program', 'Confirm delete program title')}
        isVisible={isVisible}
        cancelActionText={fbt('Cancel', 'Cancel action button')}
        confirmActionText={fbt('Delete program', 'Delete action button')}
        confirmText={fbt(
          `Are you sure you want to delete ${fbt.param('programName', data?.name)}?`,
          'Confirm delete program text',
        )}
        onClose={() => setIsVisible(false)}
        onConfirm={onDelete}
      />
    </>
  );
}
