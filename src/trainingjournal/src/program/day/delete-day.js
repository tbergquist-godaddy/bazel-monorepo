// @flow

import { type Node, useState } from 'react';
import { Button, Confirm } from '@tbergq/components';
import { fbt } from 'fbt';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from '@tbergq/router';

import { deleteDay } from '../api/fetch-days';
import { FETCH_PROGRAM_KEY } from '../api/fetch-programs';

type Props = {
  +dayId: string,
  +programId: string,
  +dayName: string,
};

export default function DeleteDay({ dayId, programId, dayName }: Props): Node {
  const cache = useQueryClient();
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(deleteDay, {
    onSuccess: () => {
      cache.invalidateQueries([FETCH_PROGRAM_KEY, programId]);
      navigate(`/programs/${programId}`);
    },
    onError: () => {},
  });

  return (
    <>
      <Button isLoading={isLoading} onClick={() => setIsVisible(true)} variant="danger">
        <fbt desc="Delete day button">Delete day</fbt>
      </Button>
      <Confirm
        isVisible={isVisible}
        onConfirm={() => mutate(dayId)}
        title={fbt('Confirm delete', 'Confirm delete day title')}
        onClose={() => setIsVisible(false)}
        confirmText={fbt(
          `Are you sure you want to delete ${fbt.param('dayName', dayName)}?`,
          'Delete day text',
        )}
        confirmActionText={fbt('Delete day', 'Delete day button')}
        cancelActionText={fbt('Cancel', 'cancel delete')}
      />
    </>
  );
}
