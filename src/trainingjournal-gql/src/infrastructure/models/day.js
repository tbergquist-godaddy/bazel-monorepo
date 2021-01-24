// @flow

import { Schema, Model, type MongoId } from 'mongoose';

import connections from '../connection';
import SetModel, { SetSchema } from './set';

export const DaySchema: Mongoose$Schema<DayModel> = new Schema({
  name: {
    type: String,
    required: true,
  },
  sets: [SetSchema],
});

class DayModel extends Model {
  _id: MongoId;
  name: string;
  sets: $ReadOnlyArray<SetModel>;
}

DaySchema.loadClass(DayModel);

const day: Class<DayModel> = connections.model('days', DaySchema);

export default day;
