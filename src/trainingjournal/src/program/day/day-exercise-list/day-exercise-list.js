// @flow

import { type Node, useState, Suspense, lazy } from 'react';
import { Box, Spinner, Modal } from '@tbergq/components';
import { create } from '@adeira/sx';
import { fbt } from 'fbt';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import type { Exercise } from '../../types';
import './day-exercise-list.css';
import DayExercise from './day-exercise';

const EditExercise = lazy(() => import('../../exercise/edit-exercise-form'));

type Props = {
  +exercises: $ReadOnlyArray<Exercise>,
  +dayId: string,
  +programId: string,
};

export default function DayExerciseList({ exercises, ...rest }: Props): Node {
  const [selectedExercise, setExercise] = useState(null);
  const onClose = () => setExercise(null);
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
        display="flex"
        className={styles('underline')}
      >
        <Box>
          <fbt desc="Exercise description">Exercise</fbt>
        </Box>
        <Box alignItems="center" display="flex">
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
            <DayExercise onClick={setExercise} exercise={exercise} />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <Modal isVisible={selectedExercise != null} onClose={onClose}>
        {selectedExercise != null ? (
          <Suspense fallback={<Spinner />}>
            <EditExercise {...rest} closeModal={onClose} exercise={selectedExercise} />
          </Suspense>
        ) : null}
      </Modal>
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
