// @flow

import { type Node, useState, lazy, Suspense } from 'react';
import { Button, useShowToast, Spinner } from '@tbergq/components';
import { fbt } from 'fbt';
import { useMutation, useQueryClient } from 'react-query';

import { deleteWeek as dw } from '../../api/fetch-weeks';
import { FETCH_PROGRAM_KEY } from '../../api/fetch-programs';

const ConfirmDeleteWeek = lazy(() => import('./confirm-delete-week'));

type Props = {
  +programId: string,
  +weekId: number,
  +weekName: string,
};

export default function DeleteWeek({ programId, weekId, weekName }: Props): Node {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
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
    <>
      <Button
        onClick={() => setShowConfirmModal(true)}
        isLoading={isLoading}
        variant="danger"
        size="small"
      >
        <fbt desc="Delete week button">Delete week</fbt>
      </Button>
      {showConfirmModal && (
        <Suspense fallback={<Spinner />}>
          <ConfirmDeleteWeek
            weekName={weekName}
            onClose={() => setShowConfirmModal(false)}
            onConfirm={deleteWeek}
          />
        </Suspense>
      )}
    </>
  );
}
