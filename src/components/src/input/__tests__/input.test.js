// @flow

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from '../input';

it('calls the onchange callback', () => {
  const onChange = jest.fn();
  render(<Input name="test" value="test value" label="Label" onChange={onChange} />);

  const input = screen.getByRole('textbox');
  expect(input).toHaveValue('test value');

  userEvent.type(input, 'l');

  expect(onChange).toHaveBeenCalledWith(expect.any(Object));
});

it('shows errors', () => {
  const onChange = jest.fn();
  render(
    <Input
      error="This is an error"
      name="test"
      value="test value"
      label="Label"
      onChange={onChange}
    />,
  );

  expect(screen.getByText('This is an error')).toBeInTheDocument();
});
