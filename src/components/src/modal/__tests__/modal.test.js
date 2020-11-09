// @flow

import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Modal from '../modal';

it('calls on close when close button is clicked', () => {
  const onClose = jest.fn();
  render(
    <Modal onClose={onClose} isVisible={true}>
      test
    </Modal>,
  );

  const closeButton = screen.getByRole('button', { name: /close/i });
  userEvent.click(closeButton);
  expect(onClose).toHaveBeenCalledWith(expect.any(Object));
});

it('calls on close on click outside', () => {
  const onClose = jest.fn();
  render(
    <Modal onClose={onClose} isVisible={true}>
      test
    </Modal>,
  );
  const backdrop = screen.getByTestId('modalBackdrop');
  userEvent.click(backdrop);
  expect(onClose).toHaveBeenCalledWith();
});

it('calls on close when esc key is pressed', () => {
  const onClose = jest.fn();
  render(
    <Modal onClose={onClose} isVisible={true}>
      test
    </Modal>,
  );

  fireEvent.keyUp(window, { key: 'Escape' });
  expect(onClose).toHaveBeenCalledWith();
});
