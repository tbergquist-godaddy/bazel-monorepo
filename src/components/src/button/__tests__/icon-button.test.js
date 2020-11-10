// @flow

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../icon-button';

const Noop = () => null;

it('calls the onClick callback', () => {
  const onClick = jest.fn();
  render(
    <Button aria-label="click me" onClick={onClick}>
      <Noop />
    </Button>,
  );

  userEvent.click(screen.getByRole('button'));

  expect(onClick).toHaveBeenCalledWith(expect.any(Object));
});
