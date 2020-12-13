// @flow

import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// $FlowFixMe[missing-export]
import router from '@tbergq/router';

import render from '../../../test-utils/render';
import LoginForm from '../login-form';

jest.mock('@tbergq/router', () => ({
  ...jest.requireActual('@tbergq/router'),
  useNavigate: () => jest.fn(),
}));

function setup() {
  return {
    getUsernameInput: () => screen.getByLabelText(/username/i),
    getPasswordInput: () => screen.getByLabelText(/password/i),
    getButton: () => screen.getByRole('button'),
  };
}

it('logs the user in and navigates to home', async () => {
  const navigate = jest.fn();
  jest.spyOn(router, 'useNavigate').mockReturnValue(navigate);
  const { getUsernameInput, getPasswordInput, getButton } = setup();
  render(<LoginForm />);

  const usernameInput = getUsernameInput();
  const passwordInput = getPasswordInput();

  userEvent.type(usernameInput, 'success');
  userEvent.type(passwordInput, '123456');

  const submit = getButton();
  userEvent.click(submit);

  await waitFor(() => expect(submit).toBeDisabled());
  await waitFor(() => expect(submit).not.toBeDisabled());

  expect(navigate).toHaveBeenCalledWith('/home');
});

it('requires both inputs', async () => {
  const { getButton } = setup();
  render(<LoginForm />);

  const button = getButton();

  userEvent.click(button);

  await waitFor(() =>
    expect(screen.getByText(/"Username" is a required field/)).toBeInTheDocument(),
  );
  expect(screen.getByText(/"Password" is a required field/)).toBeInTheDocument();
});

it('shows an error toast when login fails', async () => {
  const { getUsernameInput, getPasswordInput, getButton } = setup();
  render(<LoginForm />);

  const usernameInput = getUsernameInput();
  const passwordInput = getPasswordInput();

  userEvent.type(usernameInput, 'fail');
  userEvent.type(passwordInput, '123456');

  const submit = getButton();
  userEvent.click(submit);

  await waitFor(() => expect(submit).toBeDisabled());
  await waitFor(() => expect(submit).not.toBeDisabled());
  await waitFor(() => expect(screen.getByText('Wrong username or password')).toBeInTheDocument());
});
