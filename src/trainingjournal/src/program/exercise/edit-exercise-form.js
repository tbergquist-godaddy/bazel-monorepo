// @flow

import { type Node } from 'react';
import { Heading, useShowToast } from '@tbergq/components';
import { fbt } from 'fbt';
import { useMutation, useQueryClient } from 'react-query';

import ExerciseForm from './exercise-form/exercise-form';
import { FETCH_DAY_KEY } from '../api/fetch-days';
import { FETCH_PROGRAM_KEY } from '../api/fetch-programs';
import { editExercise } from '../api/fetch-exercises';
import type { Exercise } from '../types';

type Props = {
  +closeModal: () => void,
  +exercise: Exercise,
  +dayId: string,
  +programId: string,
};

export default function EditExerciseForm({ closeModal, exercise, dayId, programId }: Props): Node {
  const cache = useQueryClient();
  const showToast = useShowToast();

  const { mutate, isLoading } = useMutation(editExercise, {
    onError: () => {
      showToast({
        text: fbt('Failed to edit exercise', 'Edit exercise failed toast'),
        type: 'danger',
      });
    },
    onSuccess: () => {
      closeModal();
      cache.invalidateQueries([FETCH_DAY_KEY, dayId]);
      cache.invalidateQueries([FETCH_PROGRAM_KEY, programId]);
    },
  });

  const onSubmit = (values) => {
    mutate({ ...values, id: exercise.id, day: dayId });
  };

  return (
    <>
      <Heading level="h1">
        <fbt desc="Edit exercise header">Edit exercise</fbt>
      </Heading>
      <ExerciseForm
        submitText={fbt('Save exercise', 'Edit exercise submit button')}
        initialExercise={exercise}
        onSubmit={onSubmit}
        closeModal={closeModal}
        isLoading={isLoading}
      />
    </>
  );
}
