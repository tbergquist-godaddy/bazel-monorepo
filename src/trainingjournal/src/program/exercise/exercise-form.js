// @flow

import { type Node, useState } from 'react';
import { Heading, Button, FormGroup, Box, useShowToast } from '@tbergq/components';
import { fbt } from 'fbt';
import { useForm } from 'react-hook-form';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from 'react-query';

import ExerciseInputs, { schema } from './exercise-inputs';
import ExerciseList from './exercise-list';
import './exercise-form.css';
import { createExercise } from '../api/fetch-exercises';
import { FETCH_DAY_KEY } from '../api/fetch-days';
import { FETCH_PROGRAM_KEY } from '../api/fetch-programs';

type Props = {
  +closeModal: () => void,
  +dayId: string,
  +programId: string,
};

export default function ExerciseForm({ closeModal, dayId, programId }: Props): Node {
  const cache = useQueryClient();
  const [exercise, setExercise] = useState();
  const showToast = useShowToast();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

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

  const onSubmit = (values) => {
    if (exercise != null) {
      mutate({
        ...values,
        base_exercise: exercise.id,
        day: dayId,
      });
    }
  };

  return (
    <div className="ExerciseForm">
      <Heading level="h1">
        <fbt desc="Add exercise header">Add exercise</fbt>
      </Heading>
      <SwitchTransition>
        <CSSTransition
          key={exercise != null ? 'SelectExercise' : 'InputStuff'}
          addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
          classNames="ExerciseForm__fade-container"
        >
          <div>
            {exercise != null ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                <ExerciseInputs
                  clearExercise={() => setExercise(null)}
                  exerciseName={exercise.name}
                  errors={errors}
                  register={register}
                />
                <FormGroup align="right">
                  <Box marginRight="normal">
                    <Button variant="white" onClick={closeModal}>
                      <fbt desc="cancel create exercise button">Cancel</fbt>
                    </Button>
                  </Box>
                  <Button isLoading={isLoading} type="submit">
                    <fbt desc="Create exercise submit button">Add exercise</fbt>
                  </Button>
                </FormGroup>
              </form>
            ) : (
              <ExerciseList onSelect={setExercise} />
            )}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}
