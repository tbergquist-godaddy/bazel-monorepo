// @flow

import { type Node } from 'react';
import { Heading } from '@tbergq/components';
import { fbt } from 'fbt';

import { useBaseExercises } from './api/fetch-exercises';
import BaseExerciseList from './list/base-exercise-list';

export default function Exercises(): Node {
  const { data: exercises, status } = useBaseExercises();
  if (status !== 'success') {
    return <div>Something went a bit wrong</div>;
  }
  return (
    <>
      <Heading level="h1">
        <fbt desc="base exercises heading">Exercises</fbt>
      </Heading>
      <BaseExerciseList exercises={exercises} />
    </>
  );
}
