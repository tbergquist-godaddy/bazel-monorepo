// @flow

import { ExerciseModel } from '@tj-gql/infrastructure/models';

import CreateExercise from '../create-exercise';

const { resolve } = CreateExercise;
describe('application / mutations / exercise / createExercise', () => {
  const setup = () => {
    const exercise = {
      name: 'test',
      muscleGroups: ['Quads'],
    };
    // $FlowExpectedError[prop-missing]
    const act = (user) => resolve(null, { exercise }, { user });
    return {
      act,
      exercise,
    };
  };

  it('handles missing auth', async () => {
    const { act } = setup();

    const response = await act(null);
    // $FlowExpectedError[prop-missing]
    expect(response.reason).toBe('UNAUTHORIZED');
  });

  it('handles unexpected errors', async () => {
    const spy = jest.spyOn(ExerciseModel, 'createExercise').mockRejectedValue(null);
    const { act, exercise } = setup();

    const response = await act({ id: '1', email: 'lol@lol.no' });
    // $FlowExpectedError[prop-missing]
    expect(response.reason).toBe('UNKNOWN');
    expect(spy).toHaveBeenCalledWith({ ...exercise, user: '1' });

    spy.mockRestore();
  });

  it('returns the created exercise', async () => {
    const { act, exercise } = setup();
    const user = { id: '1', email: 'lol@lol.no' };
    const createdExercise = {
      _id: '123',
      name: exercise.name,
      muscleGroups: exercise.muscleGroups,
      user: '1',
    };
    const spy = jest.spyOn(ExerciseModel, 'createExercise').mockResolvedValue(createdExercise);
    const response = await act(user);

    expect(response).toBe(createdExercise);
    expect(spy).toHaveBeenCalledWith({ ...exercise, user: '1' });

    spy.mockRestore();
  });
});
