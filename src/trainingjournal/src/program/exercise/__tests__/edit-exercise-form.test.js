// @flow

import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient } from 'react-query';

import render from '../../../../test-utils/render';
import EditExerciseForm from '../edit-exercise-form';
import type { Exercise } from '../../types';
import { FETCH_DAY_KEY } from '../../api/fetch-days';
import { FETCH_PROGRAM_KEY } from '../../api/fetch-programs';

const exerciseMock: Exercise = {
  id: 1,
  set: '2',
  reps: '4',
  break_time: '2',
  base_exercise: {
    name: 'Squat',
    id: 2,
    muscle_group: {
      id: 3,
      name: 'Quads',
    },
  },
};

describe('EditExerciseForm', () => {
  const setup = () => {
    const cache = new QueryClient();
    const closeModal = jest.fn();
    const cacheSpy = jest.spyOn(cache, 'invalidateQueries');
    const dayId = '2';
    const programId = '65';

    const renderComponent = () =>
      render(
        <EditExerciseForm
          dayId={dayId}
          programId={programId}
          exercise={exerciseMock}
          closeModal={closeModal}
        />,
        {
          queryClient: cache,
        },
      );

    return {
      renderComponent,
      closeModal,
      cacheSpy,
      dayId,
      programId,
    };
  };

  it('edits an exercise', async () => {
    const { renderComponent, closeModal, cacheSpy, dayId, programId } = setup();
    renderComponent();

    expect(screen.getByRole('heading', { name: /edit exercise/i })).toBeInTheDocument();

    const repsInput = screen.getByLabelText('Reps');
    expect(repsInput).toHaveValue('4');

    userEvent.clear(repsInput);
    userEvent.type(repsInput, '8');

    await waitFor(() => expect(repsInput).toHaveValue('8'));

    const submitButton = screen.getByRole('button', { name: /save exercise/i });
    userEvent.click(submitButton);

    await waitFor(() => expect(closeModal).toHaveBeenCalledWith());
    expect(cacheSpy).toHaveBeenCalledTimes(2);
    expect(cacheSpy).toHaveBeenNthCalledWith(1, [FETCH_DAY_KEY, dayId]);
    expect(cacheSpy).toHaveBeenNthCalledWith(2, [FETCH_PROGRAM_KEY, programId]);
  });

  it('deletes an exercise', async () => {
    const { renderComponent, closeModal, cacheSpy, dayId, programId } = setup();
    renderComponent();

    userEvent.click(screen.getByRole('button', { name: /delete exercise/i }));

    const confirmDelete = await waitFor(() => {
      const [, confirmDelete] = screen.getAllByRole('button', { name: /delete exercise/i });
      expect(confirmDelete).toBeInTheDocument();
      return confirmDelete;
    });

    userEvent.click(confirmDelete);

    await waitFor(() => expect(closeModal).toHaveBeenCalledWith());
    expect(cacheSpy).toHaveBeenCalledTimes(2);
    expect(cacheSpy).toHaveBeenNthCalledWith(1, [FETCH_DAY_KEY, dayId]);
    expect(cacheSpy).toHaveBeenNthCalledWith(2, [FETCH_PROGRAM_KEY, programId]);
  });
});
