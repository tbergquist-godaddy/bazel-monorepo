// @flow

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Confirm from '../confirm';

describe('confirm', () => {
  const setup = () => {
    const onClose = jest.fn();
    const onConfirm = jest.fn();
    const renderComponent = () =>
      render(
        <Confirm
          confirmActionText="Confirm"
          cancelActionText="Cancel"
          title="Perform action?"
          confirmText="Perform this action?"
          isVisible={true}
          onClose={onClose}
          onConfirm={onConfirm}
        />,
      );
    return {
      renderComponent,
      getCancelButton: () => screen.getByRole('button', { name: /cancel/i }),
      getConfirmButton: () => screen.getByRole('button', { name: /confirm/i }),
      onClose,
      onConfirm,
    };
  };

  it('renders correctly', () => {
    const { renderComponent, getCancelButton, getConfirmButton } = setup();
    renderComponent();

    expect(screen.getByRole('heading', { name: /perform action/i })).toBeInTheDocument();
    expect(screen.getByText('Perform this action?')).toBeInTheDocument();
    expect(getCancelButton()).toBeInTheDocument();
    expect(getConfirmButton()).toBeInTheDocument();
  });

  it('calls the onClose callback', () => {
    const { renderComponent, onClose, getCancelButton } = setup();
    renderComponent();

    userEvent.click(getCancelButton());
    expect(onClose).toHaveBeenCalledWith(expect.any(Object));
  });

  it('calls the onConfirm callback', () => {
    const { renderComponent, onConfirm, getConfirmButton, onClose } = setup();
    renderComponent();

    userEvent.click(getConfirmButton());
    expect(onConfirm).toHaveBeenCalledWith();
    // We also need to close the modal once the action is confirmed
    expect(onClose).toHaveBeenCalledWith();
  });
});
