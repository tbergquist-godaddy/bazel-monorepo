// @flow

import { type Node } from 'react';
import { Heading, Box } from '@tbergq/components';
import { fbt } from 'fbt';
import { Helmet } from 'react-helmet';

import { useBaseExercises } from './api/fetch-exercises';
import BaseExerciseList from './list/base-exercise-list';
import AddButton from './add-base-exercise/add-button';

export default function Exercises(): Node {
  const { data: exercises, status } = useBaseExercises();
  if (status !== 'success') {
    return <div>Something went a bit wrong</div>;
  }
  return (
    <>
      <Helmet>
        <title>Trainingjournal | exercises </title>
      </Helmet>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Heading level="h1">
          <fbt desc="base exercises heading">Exercises</fbt>
        </Heading>
        <AddButton />
      </Box>
      <BaseExerciseList exercises={exercises} />
    </>
  );
}
