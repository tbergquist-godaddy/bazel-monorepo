// @flow

import * as React from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { createMockEnvironment } from 'relay-test-utils';
import { screen, waitFor, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import router from 'react-router-dom';

import Signup from '../signup';
import render from '../../../utils/test-renderer';

let environment;
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

beforeEach(() => {
  environment = createMockEnvironment();
});

const TestRenderer = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Signup />
    </RelayEnvironmentProvider>
  );
};

it('validates form', async () => {
  render(<TestRenderer />);

  const button = screen.getByRole('button');

  userEvent.click(button);

  await waitFor(() => expect(screen.getByText('"email" is a required field')).toBeInTheDocument());
  expect(screen.getByText('"password" is a required field')).toBeInTheDocument();
  expect(screen.getByText('"confirm password" is a required field')).toBeInTheDocument();

  const emailInput = screen.getByLabelText(/email/);
  userEvent.type(emailInput, 'test');

  userEvent.click(button);

  await waitFor(() =>
    expect(screen.queryByText('"email" is a required field')).not.toBeInTheDocument(),
  );

  expect(screen.getByText('"email" must be a valid email')).toBeInTheDocument();

  const passwordInput = screen.getByLabelText(/^password/);
  userEvent.type(passwordInput, '123');

  const confirmPassword = screen.getByLabelText(/confirm password/);
  userEvent.type(confirmPassword, '321');

  userEvent.click(button);

  await waitFor(() => expect(screen.getByText('Passwords must match')).toBeInTheDocument());
});

it('submits the form', async () => {
  const navigate = jest.fn();
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
  render(<TestRenderer />);

  const button = screen.getByRole('button');

  const emailInput = screen.getByLabelText('email');
  userEvent.type(emailInput, 'test@test.no');

  const passwordInput = screen.getByLabelText(/^password$/);
  userEvent.type(passwordInput, '123');

  const confirmPassword = screen.getByLabelText('confirm password');

  fireEvent.input(confirmPassword, { target: { value: '123' } });

  await waitFor(() => expect(confirmPassword).toHaveValue('123'));
  userEvent.click(button);

  await waitFor(() => expect(button).toBeDisabled());
  const operation = await waitFor(() => environment.mock.getMostRecentOperation());

  act(() => {
    environment.mock.resolve(operation, { data: { createAccount: { __typename: 'Identity' } } });
  });

  await waitFor(() => expect(button).not.toBeDisabled());
  expect(navigate).toHaveBeenCalledWith('/login');
});
