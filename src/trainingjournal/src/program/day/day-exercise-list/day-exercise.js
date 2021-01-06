// @flow

import { type Node } from 'react';
import { Box, borderUnderlineStyles, displayStyles } from '@tbergq/components';
import { fbt } from 'fbt';
import classNames from 'classnames';

import type { Exercise } from '../../types';
import styles from './day-exercise.module.css';

type Props = {
  +exercise: Exercise,
  +onClick: (Exercise) => void,
};

export default function DayExercise({ exercise, onClick }: Props): Node {
  return (
    <button
      onClick={() => onClick(exercise)}
      type="button"
      className={classNames(
        borderUnderlineStyles['u-border-bottom'],
        displayStyles['u-display-flex'],
        styles.DayExercise__button,
      )}
    >
      <Box title={exercise.base_exercise.name} ellipsisContainer={true}>
        {exercise.base_exercise.name}
      </Box>
      <Box
        justifyContent="flex-end"
        ellipsisContainer={true}
        flexGrow="1"
        flexShrink="0"
        display="flex"
      >
        <Box>{exercise.set}</Box>
        <Box>&nbsp;&times;&nbsp;</Box>
        <Box>{exercise.reps}</Box>
        <Box>
          &nbsp;-&nbsp;{exercise.break_time} <fbt desc="minute abbreviation">min</fbt>
        </Box>
      </Box>
    </button>
  );
}
