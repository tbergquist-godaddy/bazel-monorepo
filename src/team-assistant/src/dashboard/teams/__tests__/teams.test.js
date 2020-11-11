// @flow

import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryRenderer, graphql } from 'react-relay';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';

import Teams from '../teams';

let environment;

beforeEach(() => {
  environment = createMockEnvironment();
});

const TestRenderer = () => (
  <QueryRenderer
    environment={environment}
    render={({ props }) => {
      if (props) {
        return (
          <RelayEnvironmentProvider environment={environment}>
            <Teams user={props.viewer} />
          </RelayEnvironmentProvider>
        );
      }
      return null;
    }}
    query={graphql`
      query teamsTestQuery @relay_test_operation {
        viewer {
          ... on User {
            ...teams_user
          }
        }
      }
    `}
    variables={{}}
  />
);

it('adds a team to the connection', async () => {
  render(<TestRenderer />);

  environment.mock.resolveMostRecentOperation((operation) => {
    const data = MockPayloadGenerator.generate(operation, {
      User: () => ({
        teams: { edges: [{ node: { id: 'team:1', name: 'Barca' } }] },
      }),
    });
    return data;
  });

  expect(screen.getByText('Barca')).toBeInTheDocument();

  userEvent.click(screen.getByRole('button', { name: /Add team/i }));

  expect(screen.getByRole('heading', { name: /Add a new team/i })).toBeInTheDocument();

  const input = screen.getByLabelText('Team name');
  userEvent.type(input, 'Nordstrand');

  expect(input).toHaveValue('Nordstrand');

  const submitButton = screen.getByRole('button', { name: /Create team/i });
  userEvent.click(submitButton);

  await waitFor(() => expect(submitButton).toBeDisabled());

  act(() => {
    environment.mock.resolveMostRecentOperation((operation) => {
      const data = MockPayloadGenerator.generate(operation, {
        Team: () => ({ id: 'team:2', name: 'Nordstrand' }),
      });
      return data;
    });
  });
  expect(screen.getByText('Nordstrand')).toBeInTheDocument();
});
