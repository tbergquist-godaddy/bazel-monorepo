// @flow

import UserModel from '../user';
import connection from '../../connection';

describe('infrastructure / models / user', () => {
  beforeEach(() => UserModel.ensureIndexes());

  const setup = () => {
    return {
      dropCollection: () => connection.collection('users').drop(),
    };
  };

  it('adds a user', async () => {
    const { dropCollection } = setup();

    const email = `user.test_test@test.no`;
    const newUser = await UserModel.createUser(email);
    expect(newUser.email).toBe(email);

    await dropCollection();
  });

  it('rejects invalid emails', async () => {
    const invalidEmails = [
      'plainaddress',
      '#@%^%#$@#$@#.com',
      '@example.com',
      'Joe Smith <email@example.com>',
      'email.example.com',
      'email@example@example.com',
      '.email@example.com',
      'email.@example.com',
      'email..email@example.com',
      'あいうえお@example.com',
      'email@example.com (Joe Smith)',
      'email@example',
      'email@-example.com',
      'email@111.222.333.44444',
      'email@example..com',
      'Abc..123@example.com',
    ];
    const assertionError = 'users validation failed: email: Please fill a valid email address';
    expect.assertions(invalidEmails.length);

    for (const email of invalidEmails) {
      // eslint-disable-next-line no-await-in-loop
      await expect(() => UserModel.createUser(email)).rejects.toThrowError(assertionError);
    }
  });

  it('disallows adding the same user twice', async () => {
    const { dropCollection } = setup();
    const email = 'user.test_test2@test.com';
    expect.assertions(1);

    await UserModel.createUser(email);
    await expect(() => UserModel.createUser(email)).rejects.toThrowError('');

    await dropCollection();
  });
});
