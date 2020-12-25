// @flow

import { type Node } from 'react';
import { Box } from '@tbergq/components';
import { create } from '@adeira/sx';
import { fbt } from 'fbt';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import type { Exercise } from '../types';
import './day-exercise-list.css';

type Props = {
  +exercises: $ReadOnlyArray<Exercise>,
};

export default function DayExerciseList({ exercises }: Props): Node {
  if (exercises.length === 0) {
    return null; // TODO: some text maybe?
  }
  return (
    <>
      <Box
        paddingBottom="normal"
        marginTop="normal"
        justifyContent="space-between"
        alignItems="center"
        flex={true}
        className={styles('underline')}
      >
        <Box>
          <fbt desc="Exercise description">Exercise</fbt>
        </Box>
        <Box alignItems="center" flex={true}>
          <Box>
            <fbt desc="Sets description">Sets</fbt>
          </Box>
          <Box>&nbsp;&times;&nbsp;</Box>
          <Box>
            <fbt desc="Reps description">Reps</fbt>
          </Box>
          <Box>
            &nbsp;-&nbsp;<fbt desc="Break description">Break</fbt>
          </Box>
        </Box>
      </Box>
      <TransitionGroup className="Day__exercise-list">
        {exercises.map((exercise) => (
          <CSSTransition key={exercise.id} timeout={500} classNames="Day__exercise-list--item">
            <Box
              marginTop="normal"
              marginBottom="normal"
              paddingBottom="normal"
              justifyContent="space-between"
              flex={true}
              className={styles('underline')}
            >
              <Box title={exercise.base_exercise.name} ellipsisContainer={true}>
                {exercise.base_exercise.name}
              </Box>
              <Box
                justifyContent="flex-end"
                ellipsisContainer={true}
                flexGrow="1"
                flexShrink="0"
                flex={true}
              >
                <Box>{exercise.set}</Box>
                <Box>&nbsp;&times;&nbsp;</Box>
                <Box>{exercise.reps}</Box>
                <Box>
                  &nbsp;-&nbsp;{exercise.break_time} <fbt desc="minute abbreviation">min</fbt>
                </Box>
              </Box>
            </Box>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
}

const styles = create({
  underline: {
    ':not(:last-of-type)': {
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'var(--color-gray-light)',
    },
  },
});
