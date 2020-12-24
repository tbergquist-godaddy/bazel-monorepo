// @flow

import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import render from '../../../../test-utils/render';
import ExerciseForm from '../exercise-form';

jest.mock('react-transition-group', () => {
  const FakeTransition = jest.fn(({ children }) => children);

  return { SwitchTransition: FakeTransition, CSSTransition: FakeTransition };
});

it('creates a new exercise', async () => {
  const closeModal = jest.fn();
  render(<ExerciseForm programId="1" dayId="2" closeModal={closeModal} />);

  const button = await waitFor(() => screen.getByRole('button', { name: /squats/i }));
  expect(button).toBeInTheDocument();

  userEvent.click(button);

  const setInput = await waitFor(() => screen.getByLabelText('Set'));
  const repsInput = screen.getByLabelText('Reps');
  const breakTimeInput = screen.getByLabelText('Break time');
  expect(setInput).toBeInTheDocument();

  const submitButton = screen.getByRole('button', { name: /add exercise/i });
  userEvent.click(submitButton);

  await waitFor(() => expect(screen.getByText('"Set" is a required field')).toBeInTheDocument());

  userEvent.type(setInput, '2');
  userEvent.type(repsInput, '2');

  userEvent.type(breakTimeInput, '2');

  await waitFor(() => expect(breakTimeInput).toHaveValue('2'));
  userEvent.click(submitButton);

  await waitFor(() => expect(closeModal).toHaveBeenCalledWith());
});
