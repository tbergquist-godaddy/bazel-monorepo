// @flow

import { screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';
import render from '@tj/test-utils/render';

import AddProgramForm from '../add-program-form';

function setup() {
  const closeModal = jest.fn();
  const environment = createMockEnvironment();
  render(<AddProgramForm connectionId="id" closeModal={closeModal} />, { environment });

  return {
    closeModal,
    getInput: () => screen.getByLabelText(/name/i),
    getButton: () => screen.getByRole('button'),
    environment,
  };
}

describe('add-program', () => {
  it('creates a new program', async () => {
    const { closeModal, getInput, getButton, environment } = setup();
    const input = getInput();

    userEvent.type(input, 'success');

    const button = getButton();
    userEvent.click(button);

    await waitFor(() => expect(button).toBeDisabled());
    act(() => {
      environment.mock.resolveMostRecentOperation((operation) => {
        return MockPayloadGenerator.generate(operation);
      });
    });
    await waitFor(() =>
      expect(screen.getByText(/program was successfully created/i)).toBeInTheDocument(),
    );
    expect(closeModal).toHaveBeenCalledWith();
  });

  it('requires a program name', async () => {
    const { getButton } = setup();
    userEvent.click(getButton());

    await waitFor(() =>
      expect(screen.getByText(/"Name" is a required field/i)).toBeInTheDocument(),
    );
  });

  it('shows an error when creating a program fails', async () => {
    const { closeModal, getInput, getButton, environment } = setup();
    const input = getInput();

    userEvent.type(input, 'failure');

    const button = getButton();
    userEvent.click(button);

    await waitFor(() => expect(button).toBeDisabled());
    act(() => {
      environment.mock.resolveMostRecentOperation(() => {
        return {
          data: {
            createProgram: {
              __typename: 'UnauthorizedOrUnknown',
            },
          },
        };
      });
    });

    await waitFor(() => expect(screen.getByText(/Failed to create program/i)).toBeInTheDocument());
    expect(closeModal).not.toHaveBeenCalledWith();
  });
});
