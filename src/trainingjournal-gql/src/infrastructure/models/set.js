// @flow

import { Schema, Model, type MongoId, type MongooseSchema } from 'mongoose';

import ExerciseModel from './exercise';
import connection from '../connection';

export const SetSchema: MongooseSchema<SetModel> = new Schema({
  exercise: {
    type: Schema.Types.ObjectId,
    ref: 'exercises',
    required: true,
  },
  sets: {
    type: String,
    required: true,
  },
  reps: {
    type: String,
    required: true,
  },
  group: {
    type: String,
  },
});

class SetModel extends Model {
  _id: MongoId;
  exercise: ExerciseModel;
  sets: string;
  reps: string;
  group: ?string;
}

SetSchema.loadClass(SetModel);

const set: Class<SetModel> = connection.model('sets', SetSchema);

export default set;
