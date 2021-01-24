// @flow

import { Schema, Model, type MongoId } from 'mongoose';

import connections from '../connection';

export const DaySchema: Mongoose$Schema<DayModel> = new Schema({
  name: {
    type: String,
    required: true,
  },
});

class DayModel extends Model {
  _id: MongoId;
  name: string;
}

DaySchema.loadClass(DayModel);

const day: Class<DayModel> = connections.model('days', DaySchema);

export default day;
