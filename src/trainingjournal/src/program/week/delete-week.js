// @flow

import { type Node } from 'react';
import { Button, useShowToast } from '@tbergq/components';
import { fbt } from 'fbt';
import { useMutation, useQueryClient } from 'react-query';

import { deleteWeek as dw } from '../api/fetch-weeks';
import { FETCH_PROGRAM_KEY } from '../api/fetch-programs';

type Props = {
  +programId: string,
  +weekId: number,
};
/**
 * TODO: Add confirmation modal
 */
export default function DeleteWeek({ programId, weekId }: Props): Node {
  const cache = useQueryClient();
  const showToast = useShowToast();

  const { mutate, isLoading } = useMutation(dw, {
    onError: () => {
      showToast({
        text: fbt('Failed to delete week', 'Delete week failed error message'),
        type: 'danger',
      });
    },
    onSuccess: () => {
      cache.invalidateQueries([FETCH_PROGRAM_KEY, programId]);
    },
  });

  const deleteWeek = () => {
    mutate(weekId);
  };

  return (
    <Button onClick={deleteWeek} isLoading={isLoading} variant="danger" size="small">
      <fbt desc="Delete week button">Delete week</fbt>
    </Button>
  );
}
