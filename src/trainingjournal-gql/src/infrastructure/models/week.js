// @flow

import { Schema, Model, type MongoId } from 'mongoose';

import connections from '../connection';

export const WeekSchema: Mongoose$Schema<WeekModel> = new Schema({
  name: {
    type: String,
    required: true,
  },
});

class WeekModel extends Model {
  _id: MongoId;
  name: string;
}

WeekSchema.loadClass(WeekModel);

const week: Class<WeekModel> = connections.model('weeks', WeekSchema);

export default week;
