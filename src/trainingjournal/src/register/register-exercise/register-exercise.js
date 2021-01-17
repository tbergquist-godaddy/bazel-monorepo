// @flow

import { type Node, Suspense } from 'react';
import type { Exercise } from '@tj/program/types';
import { Heading } from '@tbergq/components';

import PreviousRegister from './previous-register/previous-register';
import RegisterExerciseLoader from './previous-register/loader';

type Props = {
  +exercise: Exercise,
  +dayRegisterId: string,
};

export default function RegisterExercise({ exercise, dayRegisterId }: Props): Node {
  return (
    <>
      <Heading level="h2" as="h3">
        {exercise.base_exercise.name}
      </Heading>
      <Suspense fallback={<RegisterExerciseLoader />}>
        <PreviousRegister
          baseExerciseId={exercise.base_exercise.id.toString()}
          dayRegisterId={dayRegisterId}
        />
      </Suspense>
    </>
  );
}
