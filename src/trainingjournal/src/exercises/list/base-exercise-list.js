// @flow

import { type Node } from 'react';
import { graphql, useFragment } from 'react-relay/hooks';

import BaseExerciseItem from './base-exercise-item';
import styles from './base-exercise-list.module.css';
import type { baseExerciseList_exercises$key as ExercisesRef } from './__generated__/baseExerciseList_exercises.graphql';

type Props = {
  +exercisesRef: ?ExercisesRef,
};

export default function BaseExerciseList({ exercisesRef }: Props): Node {
  const data = useFragment(
    graphql`
      fragment baseExerciseList_exercises on Me {
        exercises {
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
    <div className={styles.BaseExerciseList__List}>
      {exercises.map((exercise) => (
        <BaseExerciseItem key={exercise?.node?.id} exercise={exercise?.node} />
      ))}
    </div>
  );
}
