// @flow

import { type Node, useState } from 'react';
import { Button, Confirm, useShowToast } from '@tbergq/components';
import { fbt } from 'fbt';
import { useMutation } from 'react-query';

import { deleteExercise } from '../api/fetch-exercises';

type Props = {
  +exerciseId: string,
  +onMutationSuccess: () => void,
  +exerciseName: string,
};

export default function DeleteExercise({
  exerciseId,
  onMutationSuccess,
  exerciseName,
}: Props): Node {
  const showToast = useShowToast();
  const { mutate } = useMutation(deleteExercise, {
    onSuccess: () => {
      setIsVisible(false);
      onMutationSuccess();
    },
    onError: () => {
      showToast({
        text: fbt('failed to delete exercise, please try again', 'Delete exercise failure toast'),
        type: 'danger',
      });
    },
  });
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setIsVisible(true)} variant="danger">
        <fbt desc="delete exercise button">Delete exercise</fbt>
      </Button>
      <Confirm
        cancelActionText={fbt('Cancel', 'Cancel delete button')}
        confirmText={fbt(
          `Are you sure you want to delete ${fbt.param('exerciseName', exerciseName)}?`,
          'Confirm delete exercise text',
        )}
        isVisible={isVisible}
        confirmActionText={fbt('Delete exercise', 'Confirm delete button')}
        title={fbt('Confirm delete', 'Confirm delete title')}
        onClose={() => setIsVisible(false)}
        onConfirm={() => {
          mutate(exerciseId);
        }}
      />
    </>
  );
}
