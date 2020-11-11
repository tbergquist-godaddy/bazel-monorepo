// @flow

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { createMockEnvironment } from 'relay-test-utils';

import AddTeamForm from '../add-team-form';

let environment;

beforeEach(() => {
  environment = createMockEnvironment();
});

const TestRenderer = () => (
  <RelayEnvironmentProvider environment={environment}>
    <AddTeamForm onClose={jest.fn()} connectionId="test" />
  </RelayEnvironmentProvider>
);

it('shows error when name is missing', async () => {
  render(<TestRenderer />);

  const submitButton = screen.getByRole('button', { name: /Create team/i });
  userEvent.click(submitButton);

  await waitFor(() =>
    expect(screen.getByText('Team name is a required field')).toBeInTheDocument(),
  );
});
