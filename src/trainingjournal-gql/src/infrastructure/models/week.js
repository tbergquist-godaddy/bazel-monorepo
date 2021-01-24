// @flow

import { Schema, Model, type MongoId } from 'mongoose';

import connections from '../connection';
import DayModel, { DaySchema } from './day';

export const WeekSchema: Mongoose$Schema<WeekModel> = new Schema({
  name: {
    type: String,
    required: true,
  },
  days: [DaySchema],
});

class WeekModel extends Model {
  _id: MongoId;
  name: string;
  days: $ReadOnlyArray<DayModel>;
}

WeekSchema.loadClass(WeekModel);

const week: Class<WeekModel> = connections.model('weeks', WeekSchema);

export default week;
