// @flow

import { type Node, useState } from 'react';
import { Button, Confirm } from '@tbergq/components';
import { fbt } from 'fbt';
import { useNavigate } from '@tbergq/router';
import { useMutation, useQueryClient } from 'react-query';

import { deleteProgram, FETCH_PROGRAMS_KEY } from './api/fetch-programs';

type Props = {
  +programId: string,
  +programName: string,
};

export default function DeleteProgram({ programId, programName }: Props): Node {
  const cache = useQueryClient();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const { mutate, isLoading } = useMutation(deleteProgram, {
    onSuccess: () => {
      cache.invalidateQueries(FETCH_PROGRAMS_KEY);
      navigate('/programs');
    },
  });

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
          `Are you sure you want to delete ${fbt.param('programName', programName)}?`,
          'Confirm delete program text',
        )}
        onClose={() => setIsVisible(false)}
        onConfirm={() => mutate(programId)}
      />
    </>
  );
}
