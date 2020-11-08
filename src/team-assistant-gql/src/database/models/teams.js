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

export class TeamDoc extends Model {
  _id: MongoId;
  userId: string;
  name: string;

  static async createTeam({ userId, name }: { userId: string, name: string }): Promise<TeamDoc> {
    const newTeam = await this.create({ userId, name });
    return newTeam;
  }

  static async getTeams({ userId }: { +userId: string }): Promise<$ReadOnlyArray<TeamDoc>> {
    const teams = await this.find({ userId });
    return teams;
  }
}

TeamSchema.loadClass(TeamDoc);

const team: Class<TeamDoc> = connection.model('Team', TeamSchema);
export default team;
