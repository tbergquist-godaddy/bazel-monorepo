// @flow

import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';
import { screen, waitFor, act } from '@testing-library/react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import userEvent from '@testing-library/user-event';
// $FlowFixMe[missing-export]
import router from '@tbergq/router';

import render from '../../../utils/test-renderer';
import LoginForm from '../login-form';

jest.mock('@tbergq/router', () => ({
  ...jest.requireActual('@tbergq/router'),
  useNavigate: () => jest.fn(),
}));

let environment;

beforeEach(() => {
  environment = createMockEnvironment();
});

const TestRenderer = () => (
  <RelayEnvironmentProvider environment={environment}>
    <LoginForm />
  </RelayEnvironmentProvider>
);

it('shows error message for failed login', async () => {
  render(<TestRenderer />);

  const emailInput = screen.getByLabelText('email');
  userEvent.type(emailInput, 'test@test.no');
  await waitFor(() => expect(emailInput).toHaveValue('test@test.no'));

  const passwordInput = screen.getByLabelText('password');
  userEvent.type(passwordInput, '123456');
  await waitFor(() => expect(passwordInput).toHaveValue('123456'));

  const submitButton = screen.getByRole('button');
  userEvent.click(submitButton);

  await waitFor(() => expect(submitButton).toBeDisabled());

  act(() => {
    environment.mock.resolveMostRecentOperation((operation) => {
      return MockPayloadGenerator.generate(operation, {
        LoginResponse: () => ({ token: null }),
      });
    });
  });

  await waitFor(() => expect(screen.getByText('Login failed')).toBeInTheDocument());
});

it('validates inputs', async () => {
  render(<TestRenderer />);

  const submitButton = screen.getByRole('button');
  userEvent.click(submitButton);

  await waitFor(() =>
    expect(screen.getByLabelText(/"email" is a required field/)).toBeInTheDocument(),
  );
  expect(screen.getByLabelText(/"password" is a required field/)).toBeInTheDocument();

  const emailInput = screen.getByLabelText(/email/);
  userEvent.type(emailInput, 'test');
  await waitFor(() => expect(emailInput).toHaveValue('test'));
  expect(screen.getByLabelText(/"email" must be a valid email/)).toBeInTheDocument();
});

it('redirects after login', async () => {
  const navigate = jest.fn();
  jest.spyOn(router, 'useNavigate').mockReturnValue(navigate);
  render(<TestRenderer />);

  const emailInput = screen.getByLabelText('email');
  userEvent.type(emailInput, 'test@test.no');
  await waitFor(() => expect(emailInput).toHaveValue('test@test.no'));

  const passwordInput = screen.getByLabelText('password');
  userEvent.type(passwordInput, '123456');
  await waitFor(() => expect(passwordInput).toHaveValue('123456'));

  const submitButton = screen.getByRole('button');
  userEvent.click(submitButton);

  await waitFor(() => expect(submitButton).toBeDisabled());

  act(() => {
    environment.mock.resolveMostRecentOperation((operation) =>
      MockPayloadGenerator.generate(operation, {
        Login: () => ({ token: 'token' }),
      }),
    );
  });

  expect(navigate).toHaveBeenCalledWith('/dashboard');
});
