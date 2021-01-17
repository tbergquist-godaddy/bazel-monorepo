// @flow

import { type Node } from 'react';
import type { Exercise } from '@tj/program/types';
import { textAlignStyles } from '@tbergq/components';

import styles from './exercise-table.module.css';

type Props = {
  +exercises: $ReadOnlyArray<Exercise>,
};

export default function ExerciseTable({ exercises }: Props): Node {
  return (
    <div className={styles.ExerciseTable}>
      <table className={styles.ExerciseTable__table}>
        <thead className={styles['ExerciseTable__table-head']}>
          <tr>
            <th className={textAlignStyles['u-text-align-left']}>Name</th>
            <th className={textAlignStyles['u-text-align-left']}>Sets</th>
            <th className={textAlignStyles['u-text-align-left']}>Reps</th>
            <th className={textAlignStyles['u-text-align-left']}>Break</th>
            <th />
          </tr>
        </thead>
        <tbody className={styles['ExerciseTable__table-body']}>
          {exercises.map((exercise) => (
            <tr key={exercise.id}>
              <td>{exercise.base_exercise.name}</td>
              <td>{exercise.set}</td>
              <td>{exercise.reps}</td>
              <td>{exercise.break_time}</td>
              <td>todo</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
