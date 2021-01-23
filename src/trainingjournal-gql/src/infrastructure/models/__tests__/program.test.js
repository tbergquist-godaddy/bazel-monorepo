// @flow

import { Types } from 'mongoose';

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

  it('adds a week', async () => {
    const { createUser, dropCollection } = setup();
    const user = await createUser();
    const name = 'Getting started';
    const program = await ProgramModel.createProgram({
      name,
      user: user._id,
    });

    const updatedProgram = await ProgramModel.addWeek({
      programId: program._id,
      user: user._id,
      weekName: 'week 1',
    });

    expect(updatedProgram?.weeks[0].name).toBe('week 1');

    await dropCollection('users');
    await dropCollection('programs');
  });

  it('does not add a week if the user does not own the program', async () => {
    const { createUser, dropCollection } = setup();
    const user = await createUser();
    const name = 'Getting started';
    const program = await ProgramModel.createProgram({
      name,
      user: user._id,
    });

    const updatedProgram = await ProgramModel.addWeek({
      programId: program._id,
      // $FlowExpectedError[prop-missing]
      user: Types.ObjectId(),
      weekName: 'week 1',
    });

    expect(updatedProgram).toBeNull();

    await dropCollection('users');
    await dropCollection('programs');
  });
});
