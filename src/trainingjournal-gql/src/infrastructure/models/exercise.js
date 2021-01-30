// @flow

import { Schema, Model, type MongoId } from 'mongoose';

import UserModel from './user';
import connection from '../connection';

const ExerciseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  muscleGroups: [String],
});

type AddUserInput = {
  +name: string,
  +user: MongoId,
  +muscleGroups?: $ReadOnlyArray<string>,
};

class ExerciseModel extends Model {
  _id: MongoId;
  name: string;
  user: UserModel;
  muscleGroups: $ReadOnlyArray<string>;

  static createExercise(exercise: AddUserInput): Promise<this> {
    return this.create(exercise);
  }

  static getExercises(user: string): Promise<$ReadOnlyArray<this>> {
    return this.find({ user });
  }

  static getExercisesByIds(
    ids: $ReadOnlyArray<string>,
    user: ?string,
  ): Promise<$ReadOnlyArray<this>> {
    return this.find({
      _id: { $in: ids },
      user,
    });
  }
}

ExerciseSchema.loadClass(ExerciseModel);

const exercise: Class<ExerciseModel> = connection.model('exercises', ExerciseSchema);

export default exercise;
