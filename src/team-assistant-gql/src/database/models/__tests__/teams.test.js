// @flow

import connection from '../../connection';
import TeamModel from '../teams';
import UserModel from '../users';

let user;
beforeEach(async () => {
  user = await UserModel.createUser({
    email: 'test@test.no',
    password: '123',
  });
});

afterEach(async () => {
  await connection.collection('users').drop();
});

it('adds a new team', async () => {
  const team = await TeamModel.createTeam({ userId: user._id, name: 'Barca' });

  expect(team.name).toBe('Barca');
  await connection.collection('teams').drop();
});

it('fails when name is missing', async () => {
  // $FlowExpectedError[incompatible-call] Intentionally testing null value
  await expect(TeamModel.createTeam({ userId: user._id, name: null })).rejects.toThrow(
    'Team validation failed: name: Path `name` is required.',
  );
});

it('fails when userId is missing', async () => {
  // $FlowExpectedError[incompatible-call] Intentionally testing null value
  await expect(TeamModel.createTeam({ userId: null, name: 'Barca' })).rejects.toThrow(
    'Team validation failed: userId: Path `userId` is required.',
  );
});

it('fails when userId is missing in user table', async () => {
  await expect(TeamModel.createTeam({ userId: 'omg@lol.com', name: 'Barca' })).rejects.toThrow(
    'Team validation failed: userId: Cast to ObjectId failed for value "omg@lol.com" at path "userId"',
  );
});
