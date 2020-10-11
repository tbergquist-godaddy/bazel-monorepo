// @flow

import connection from '../../connection';
import Users from '../users';

const UserModel: any = Users;

beforeEach(async () => {
  await UserModel.createUser({
    email: 'test@test.no',
    password: '123',
  });
});

afterEach(async () => {
  await connection.collection('users').drop();
});

it('adds a new user and verifies password', async () => {
  const password = '123456';
  const email = 'one@two.com';
  const user = await UserModel.createUser({ email, password });
  expect(user._id).toBe('one@two.com');

  expect(await UserModel.verifyPassword(email, password)).not.toBeNull();
  expect(await UserModel.verifyPassword(email, 'lol')).toBeNull();
});

it('gives error if email exists', async () => {
  await expect(UserModel.createUser({ email: 'test@test.no', password: '223' })).rejects.toThrow(
    'E11000 duplicate key error dup key: { : "test@test.no" }',
  );
  await expect(UserModel.createUser({ email: 'TesT@test.no', password: '223' })).rejects.toThrow(
    'E11000 duplicate key error dup key: { : "test@test.no" }',
  );
});
