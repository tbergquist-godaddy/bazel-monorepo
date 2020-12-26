// @flow

import { type Node } from 'react';
import { Heading, useShowToast } from '@tbergq/components';
import { fbt } from 'fbt';
import { useMutation, useQueryClient } from 'react-query';

import ExerciseForm from './exercise-form/exercise-form';
import { FETCH_DAY_KEY } from '../api/fetch-days';
import { FETCH_PROGRAM_KEY } from '../api/fetch-programs';
import { createExercise } from '../api/fetch-exercises';

type Props = {
  +closeModal: () => void,
  +dayId: string,
  +programId: string,
};

export default function AddExerciseForm({ closeModal, dayId, programId }: Props): Node {
  const cache = useQueryClient();
  const showToast = useShowToast();

  const { mutate, isLoading } = useMutation(createExercise, {
    onError: () => {
      showToast({
        text: fbt('Failed to create exercise', 'Exercise failed toast'),
        type: 'danger',
      });
    },
    onSuccess: () => {
      closeModal();
      cache.invalidateQueries([FETCH_DAY_KEY, dayId]);
      cache.invalidateQueries([FETCH_PROGRAM_KEY, programId]);
    },
  });

  const onSubmit = (exercise) => {
    mutate({
      ...exercise,
      day: dayId,
    });
  };

  return (
    <>
      <Heading level="h1">
        <fbt desc="Add exercise header">Add exercise</fbt>
      </Heading>
      <ExerciseForm onSubmit={onSubmit} closeModal={closeModal} isLoading={isLoading} />
    </>
  );
}
