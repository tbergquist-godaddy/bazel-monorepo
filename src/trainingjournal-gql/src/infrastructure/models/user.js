// @flow

import { Schema, Model, type MongoId } from 'mongoose';

import connection from '../connection';

const UserSchema = new Schema({
  email: {
    type: String,
    match: [
      /^\w+(?:[.-]?\w+)*@\w+(?:[.-]?\w+)*(?:\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
    index: {
      unique: true,
      required: true,
    },
  },
});

class UserModel extends Model {
  _id: MongoId;
  email: string;

  static createUser(email: string): Promise<this> {
    return this.create({ email });
  }
}

UserSchema.loadClass(UserModel);

const user: Class<UserModel> = connection.model('users', UserSchema);

export default user;
