// @flow

import { type Node, useState } from 'react';
import { Button, FormGroup, Box } from '@tbergq/components';
import { fbt } from 'fbt';
import { useForm } from 'react-hook-form';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { yupResolver } from '@hookform/resolvers/yup';

import ExerciseInputs, { schema } from './exercise-inputs';
import ExerciseList from './exercise-list';
import './exercise-form.css';
import type { Exercise } from '../../types';

type FormValues = $ReadOnly<{
  base_exercise: number,
  break_time: string,
  description: string,
  reps: string,
  set: string,
}>;

type Props = {
  +closeModal: () => void,
  +onSubmit: (FormValues) => void,
  +isLoading: boolean,
  +initialExercise?: Exercise,
  +submitText: string,
  +extraAction?: Node,
};

export default function ExerciseForm({
  closeModal,
  onSubmit,
  isLoading,
  initialExercise = null,
  submitText,
  extraAction,
}: Props): Node {
  const [exercise, setExercise] = useState(() => {
    if (initialExercise != null) {
      return initialExercise.base_exercise;
    }
    return null;
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialExercise ?? {},
  });

  const submit = (values) => {
    onSubmit({
      ...values,
      base_exercise: exercise?.id,
    });
  };
  return (
    <div className="ExerciseForm">
      <SwitchTransition>
        <CSSTransition
          key={exercise != null ? 'SelectExercise' : 'InputStuff'}
          addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
          classNames="ExerciseForm__fade-container"
        >
          <div>
            {exercise != null ? (
              <form onSubmit={handleSubmit(submit)}>
                <ExerciseInputs
                  clearExercise={() => setExercise(null)}
                  exerciseName={exercise.name}
                  errors={errors}
                  register={register}
                />
                <FormGroup align="right">
                  {extraAction}
                  <Box marginRight="normal">
                    <Button variant="white" onClick={closeModal}>
                      <fbt desc="cancel create exercise button">Cancel</fbt>
                    </Button>
                  </Box>
                  <Button isLoading={isLoading} type="submit">
                    {submitText}
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
