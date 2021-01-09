// @flow

import { type Node } from 'react';

import type { BaseExercise } from '../../program/types';
import BaseExerciseItem from './base-exercise-item';
import styles from './base-exercise-list.module.css';

type Props = {
  +exercises: $ReadOnlyArray<BaseExercise>,
};

export default function BaseExerciseList({ exercises }: Props): Node {
  return (
    <div className={styles.BaseExerciseList__List}>
      {exercises.map((exercise) => (
        <BaseExerciseItem key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
}
