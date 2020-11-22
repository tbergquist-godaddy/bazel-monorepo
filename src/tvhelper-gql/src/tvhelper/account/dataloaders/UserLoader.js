// @flow

import DataLoader from 'dataloader';

import UserRepository from '../../../database/models/user';
import type { User as UserType } from '../Account';

const fetchUser = async (usernames: $ReadOnlyArray<string>) => {
  const users = await UserRepository.findUsers(usernames);
  return users.map((user) => {
    if (user == null) {
      return null;
    }
    return {
      id: user._id,
      username: user.username,
      password: user.password,
    };
  });
};

const UserLoader = (): DataLoader<string, ?UserType, string> =>
  new DataLoader<string, ?UserType>((usernames: $ReadOnlyArray<string>) => fetchUser(usernames));

export default UserLoader;
