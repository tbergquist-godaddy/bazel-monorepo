// @flow

import { Types } from 'mongoose';

import connection from '../../connection';
import UserModel from '../user';
import ProgramModel from '../program';
import ExerciseModel from '../exercise';

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

  it('adds a day', async () => {
    const { createUser, dropCollection } = setup();
    const user = await createUser();
    const name = 'Getting started';
    const program = await ProgramModel.createProgram({
      name,
      user: user._id,
    });

    const withWeek = await ProgramModel.addWeek({
      programId: program._id,
      user: user._id,
      weekName: 'week 1',
    });
    const week = withWeek?.weeks[0];

    const updatedProgram = await ProgramModel.addDay({
      programId: program._id,
      user: user._id,
      weekId: week?._id ?? '',
      dayName: 'day 1',
    });

    const day = updatedProgram?.weeks[0].days[0];

    expect(day?.name).toBe('day 1');

    await dropCollection('users');
    await dropCollection('programs');
  });

  it('adds does not add a day if user does not own the program', async () => {
    const { createUser, dropCollection } = setup();
    const user = await createUser();
    const name = 'Getting started';
    const program = await ProgramModel.createProgram({
      name,
      user: user._id,
    });

    const withWeek = await ProgramModel.addWeek({
      programId: program._id,
      user: user._id,
      weekName: 'week 1',
    });
    const week = withWeek?.weeks[0];

    const updatedProgram = await ProgramModel.addDay({
      programId: program._id,
      // $FlowExpectedError[prop-missing]
      user: Types.ObjectId(),
      weekId: week?._id ?? '',
      dayName: 'day 1',
    });

    expect(updatedProgram).toBeNull();

    await dropCollection('users');
    await dropCollection('programs');
  });

  it('adds a set', async () => {
    const { createUser, dropCollection } = setup();
    const user = await createUser();
    const name = 'Getting started';

    const exercise = await ExerciseModel.createExercise({
      name: 'Squats',
      user: user._id,
    });

    const program = await ProgramModel.create({
      name,
      user: user._id,
      weeks: [
        // $FlowExpectedError[incompatible-call]
        {
          name: 'week 1',
          days: [
            {
              name: 'day 1',
              sets: [],
            },
            {
              name: 'day 2',
              sets: [],
            },
          ],
        },
      ],
    });
    const day = program.weeks[0].days[0];
    const updatedProgram = await ProgramModel.addSet({
      user: user._id,
      dayId: day._id,
      set: {
        exercise: exercise._id,
        sets: '2-4',
        reps: '5',
        group: 'A1',
      },
    });

    const { group, reps, sets } = updatedProgram?.weeks[0].days[0].sets[0] ?? {};
    expect(group).toEqual('A1');
    expect(reps).toEqual('5');
    expect(sets).toEqual('2-4');

    await dropCollection('users');
    await dropCollection('programs');
  });

  it('deletes a program', async () => {
    const { createUser, dropCollection } = setup();
    const user = await createUser();
    const name = 'Getting started';

    const program = await ProgramModel.createProgram({
      name,
      user: user._id,
    });

    const res = await ProgramModel.deleteProgram(program._id, user._id);
    expect(res.deletedCount).toBe(1);

    await dropCollection('users');
  });

  it('deletes a week', async () => {
    const { createUser, dropCollection } = setup();
    const user = await createUser();
    const name = 'Getting started';

    const program = await ProgramModel.create({
      name,
      user: user._id,
      // $FlowExpectedError[incompatible-call]
      weeks: [{ name: 'week 1' }, { name: 'week 2' }],
    });

    const res = await ProgramModel.deleteWeek(program.weeks[1]._id, user._id);
    expect(res.deletedCount).toBe(1);

    await dropCollection('users');
    await dropCollection('programs');
  });

  it('deletes a day', async () => {
    const { createUser, dropCollection } = setup();
    const user = await createUser();
    const name = 'Getting started';

    const program = await ProgramModel.create({
      name,
      user: user._id,
      // $FlowExpectedError[incompatible-call]
      weeks: [{ name: 'week 1' }, { name: 'week 2', days: [{ name: 'day 1' }] }],
    });

    const res = await ProgramModel.deleteDay(program.weeks[1].days[0]._id, user._id);
    expect(res.deletedCount).toBe(1);

    await dropCollection('users');
    await dropCollection('programs');
  });

  it('deletes a set', async () => {
    const { createUser, dropCollection } = setup();
    const user = await createUser();
    const name = 'Getting started';

    const exercise = await ExerciseModel.createExercise({
      name: 'Squats',
      user: user._id,
    });

    const program = await ProgramModel.create({
      name,
      user: user._id,
      weeks: [
        // $FlowExpectedError[incompatible-call]
        { name: 'week 1' },
        // $FlowExpectedError[incompatible-call]
        {
          name: 'week 2',
          days: [
            {
              name: 'day 1',
              sets: [
                {
                  exercise: exercise._id,
                  sets: '4',
                  reps: '8',
                  groups: 'A1',
                },
              ],
            },
          ],
        },
      ],
    });

    const res = await ProgramModel.deleteSet(program.weeks[1].days[0].sets[0]._id, user._id);
    expect(res.deletedCount).toBe(1);

    await dropCollection('users');
    await dropCollection('programs');
    await dropCollection('exercises');
  });
});
