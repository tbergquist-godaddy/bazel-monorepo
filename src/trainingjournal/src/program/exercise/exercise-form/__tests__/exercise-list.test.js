// @flow

import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import render from '../../../../../test-utils/render';
import ExerciseList from '../exercise-list';

describe('ExerciseList', () => {
  const onSelect = jest.fn();
  const setup = () => {
    const renderComponent = () => render(<ExerciseList onSelect={onSelect} />);

    return {
      renderComponent,
      onSelect,
      getInput: () => screen.getByLabelText('Filter exercises'),
      getSquatsButton: () => screen.getByRole('button', { name: /squats/i }),
    };
  };

  it('filters the list', async () => {
    const { renderComponent, getInput, getSquatsButton } = setup();
    renderComponent();

    const input = await waitFor(() => getInput());

    userEvent.type(input, 'arnold');

    await waitFor(() =>
      expect(screen.getByRole('button', { name: /arnold press/i })).toBeInTheDocument(),
    );

    userEvent.clear(input);
    userEvent.type(input, 'press');

    await waitFor(() => expect(input).toHaveValue('press'));
    await waitFor(() => expect(screen.getAllByRole('button')).toHaveLength(2));

    expect(screen.getByRole('button', { name: /arnold press/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /bench press/i })).toBeInTheDocument();

    userEvent.clear(input);
    userEvent.type(input, 'quads');

    await waitFor(() => expect(getSquatsButton()).toBeInTheDocument());

    await waitFor(() => expect(screen.getAllByRole('button')).toHaveLength(2));
    expect(screen.getByRole('button', { name: /bulgarsk utfall/i })).toBeInTheDocument();
  });

  it('calls the onSelect callback', async () => {
    const { renderComponent, onSelect, getSquatsButton } = setup();
    renderComponent();

    const squats = await waitFor(() => getSquatsButton());
    expect(squats).toBeInTheDocument();

    userEvent.click(squats);

    expect(onSelect).toHaveBeenCalledWith({
      id: 1,
      muscle_group: { name: 'Quads' },
      name: 'Squats',
    });
  });
});
