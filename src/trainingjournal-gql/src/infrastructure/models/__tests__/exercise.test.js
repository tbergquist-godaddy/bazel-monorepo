// @flow

import connection from '../../connection';
import ExerciseModel from '../exercise';
import UserModel from '../user';

describe('infrastructure / models / Exercise', () => {
  const setup = () => {
    const createUser = () => UserModel.createUser('exercise.test_test@test.com');
    const dropCollection = (tableName: string) => connection.collection(tableName).drop();
    return {
      dropCollection,
      createUser,
    };
  };

  it('creates an exercise', async () => {
    const { dropCollection, createUser } = setup();
    const { _id } = await createUser();
    const exercise = {
      name: 'Squats',
      muscleGroups: ['Quads'],
      user: _id,
    };

    const newExercise = await ExerciseModel.createExercise(exercise);

    expect(newExercise.name).toEqual(exercise.name);
    // $FlowExpectedError[prop-missing] how to type this?
    expect(newExercise.muscleGroups.toObject()).toEqual(exercise.muscleGroups);
    expect(newExercise.user).toEqual(_id);

    await Promise.all([dropCollection('exercises'), dropCollection('users')]);
  });
});
