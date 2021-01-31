// @flow

import { type Node } from 'react';
import { graphql, useFragment } from 'react-relay/hooks';
import { Heading, Box } from '@tbergq/components';
import { fbt } from 'fbt';

import BaseExerciseItem from './base-exercise-item';
import styles from './base-exercise-list.module.css';
import type { baseExerciseList_exercises$key as ExercisesRef } from './__generated__/baseExerciseList_exercises.graphql';
import AddButton from '../add-base-exercise/add-button';

type Props = {
  +exercisesRef: ?ExercisesRef,
};

export default function BaseExerciseList({ exercisesRef }: Props): Node {
  const data = useFragment(
    graphql`
      fragment baseExerciseList_exercises on Me {
        exercises(first: 100) @connection(key: "baseExerciseList_exercises") {
          __id
          edges {
            node {
              id
              ...baseExerciseItem_exercise
            }
          }
        }
      }
    `,
    exercisesRef,
  );
  const exercises = data?.exercises?.edges ?? [];
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Heading level="h1">
          <fbt desc="base exercises heading">Exercises</fbt>
        </Heading>
        <AddButton connectionId={data?.exercises?.__id} />
      </Box>
      <div className={styles.BaseExerciseList__List}>
        {exercises.map((exercise) => (
          <BaseExerciseItem key={exercise?.node?.id} exercise={exercise?.node} />
        ))}
      </div>
    </>
  );
}
