// @flow

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../button';

it('calls the onClick callback', () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>Button</Button>);

  userEvent.click(screen.getByRole('button'));

  expect(onClick).toHaveBeenCalledWith(expect.any(Object));
});
