// @flow

import { screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';
import { loadQuery } from 'react-relay/hooks';

import render from '../../../test-utils/render';
import Program, { query } from '../program';

function setup() {
  const environment = createMockEnvironment();
  const TestRenderer = ({ id }) => {
    const preparedQuery = loadQuery(
      environment,
      query,
      { id },
      {
        fetchPolicy: 'store-and-network',
      },
    );
    return <Program prepared={{ query: preparedQuery }} routeData={{ params: { id } }} />;
  };
  return {
    TestRenderer,
    environment,
  };
}

it('creates a new week', async () => {
  const { TestRenderer, environment } = setup();
  render(<TestRenderer id="1" />, { environment });

  environment.mock.resolveMostRecentOperation((operation) => {
    return MockPayloadGenerator.generate(operation, {
      Program: () => ({
        name: 'mock_program',
        weeks: { edges: [{ node: { name: 'Week 1' } }] },
      }),
    });
  });
  await waitFor(() =>
    expect(screen.getByRole('heading', { name: /mock_program/i })).toBeInTheDocument(),
  );

  // Our program already has one week
  expect(screen.getByRole('heading', { name: /week 1/i })).toBeInTheDocument();

  const createButton = screen.getByRole('button', { name: /add week/i });
  userEvent.click(createButton);

  act(() => {
    environment.mock.resolveMostRecentOperation((operation) =>
      MockPayloadGenerator.generate(operation),
    );
  });

  await waitFor(() =>
    expect(screen.getByText('Week was successfully created')).toBeInTheDocument(),
  );
});
