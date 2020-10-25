// @flow strict

import { Schema, Model, type MongoId } from 'mongoose';

import connection from '../connection';

const TeamSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

class TeamDoc extends Model {
  _id: MongoId;
  userId: string;
  name: string;

  static async createTeam({ userId, name }: { userId: string, name: string }): Promise<TeamDoc> {
    const newTeam = await this.create({ userId, name });
    return newTeam;
  }
}

TeamSchema.loadClass(TeamDoc);

const team: Class<TeamDoc> = connection.model('Team', TeamSchema);
export default team;
