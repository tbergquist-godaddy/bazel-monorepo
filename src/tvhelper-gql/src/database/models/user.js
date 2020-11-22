// @flow

import { Schema, Model, type MongoId } from 'mongoose';
import { generate, verify } from 'password-hash';

import { tvHelperConnection } from '../connections';

const UserSchema = new Schema({
  username: {
    type: String,
    index: {
      required: true,
      unique: true,
      background: !__DEV__,
    },
  },
  password: {
    type: String,
    index: {
      required: true,
      background: !__DEV__,
    },
  },
  email: {
    type: String,
    index: {
      required: true,
      unique: true,
      background: !__DEV__,
    },
  },
});

type CreateUserType = {
  +username: string,
  +password: string,
  +email: string,
};

class UserModel extends Model {
  _id: MongoId;
  username: string;
  password: string;
  email: string;

  static async findUser(username: ?string): Promise<null | this> {
    const user = await this.findOne({ username });

    return user == null ? null : user;
  }

  static async findUsers(usernames: $ReadOnlyArray<string>): Promise<$ReadOnlyArray<this | null>> {
    const users = await this.find({ username: { $in: usernames } });
    return users.map((user) => (user == null ? null : user));
  }

  static async createUser({ password, ...rest }: CreateUserType): Promise<this> {
    const addedUser = await this.create({
      password: generate(password),
      ...rest,
    });
    return addedUser;
  }

  static async changePassword(
    userId: string,
    password: string,
    newPassword: string,
  ): Promise<this> | Error {
    const user = await this.findById(userId);

    if (user == null || !verify(password, user.password)) {
      throw new Error('Wrong password');
    }

    user.password = generate(newPassword);
    await user.save();
    return user;
  }
}

UserSchema.loadClass(UserModel);

const user: Class<UserModel> = tvHelperConnection.model('users', UserSchema);

export default user;
