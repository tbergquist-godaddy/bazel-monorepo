// @flow

import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import render from '../../../../test-utils/render';
import AddProgramForm from '../add-program-form';

function setup() {
  const closeModal = jest.fn();
  render(<AddProgramForm closeModal={closeModal} />);

  return {
    closeModal,
    getInput: () => screen.getByLabelText(/name/i),
    getButton: () => screen.getByRole('button'),
  };
}

it('creates a new program', async () => {
  const { closeModal, getInput, getButton } = setup();
  const input = getInput();

  userEvent.type(input, 'success');

  const button = getButton();
  userEvent.click(button);

  await waitFor(() =>
    expect(screen.getByText(/program was successfully created/i)).toBeInTheDocument(),
  );
  expect(closeModal).toHaveBeenCalledWith();
});

it('requires a program name', async () => {
  const { getButton } = setup();
  userEvent.click(getButton());

  await waitFor(() => expect(screen.getByText(/"Name" is a required field/i)).toBeInTheDocument());
});

it('shows an error when creating a program fails', async () => {
  const { closeModal, getInput, getButton } = setup();
  const input = getInput();

  userEvent.type(input, 'failure');

  const button = getButton();
  userEvent.click(button);

  await waitFor(() => expect(screen.getByText(/Failed to create program/i)).toBeInTheDocument());
  expect(closeModal).not.toHaveBeenCalledWith();
});
