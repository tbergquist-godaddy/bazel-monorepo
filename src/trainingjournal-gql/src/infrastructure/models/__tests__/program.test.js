// @flow

import connection from '../../connection';
import UserModel from '../user';
import ProgramModel from '../program';

describe('infrastructure / models / program', () => {
  const setup = () => {
    const createUser = () => {
      return UserModel.createUser('program.test_test@test.com');
    };
    const dropCollection = (name) => connection.collection(name).drop();
    return {
      createUser,
      dropCollection,
    };
  };

  it('creates a program', async () => {
    const { createUser, dropCollection } = setup();
    const user = await createUser();
    const name = 'Getting started';
    const program = await ProgramModel.createProgram({
      name,
      user: user._id,
    });

    expect(program.name).toBe(name);
    await dropCollection('users');
    await dropCollection('programs');
  });
});
