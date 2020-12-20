// @flow

import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import render from '../../../test-utils/render';
import Program from '../program';

it('creates a new program', async () => {
  render(<Program routeData={{ params: { id: '1' } }} />);
  await waitFor(() =>
    expect(screen.getByRole('heading', { name: /mock_program/i })).toBeInTheDocument(),
  );

  // Our program already has one week
  expect(screen.getByRole('heading', { name: /week 1/i })).toBeInTheDocument();

  const createButton = screen.getByRole('button', { name: /add week/i });
  userEvent.click(createButton);

  await waitFor(() =>
    expect(screen.getByText('Week was successfully created')).toBeInTheDocument(),
  );
});
