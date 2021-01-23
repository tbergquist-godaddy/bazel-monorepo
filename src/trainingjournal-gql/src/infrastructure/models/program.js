// @flow

import { Schema, Model, type MongoId } from 'mongoose';

import connection from '../connection';

const ProgramSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
});

type CreateProgramArgs = {
  +name: string,
  +user: string,
};

class ProgramModel extends Model {
  _id: MongoId;
  name: string;
  user: MongoId;

  static createProgram(program: CreateProgramArgs): Promise<this> {
    return this.create(program);
  }
}

ProgramSchema.loadClass(ProgramModel);

const program: Class<ProgramModel> = connection.model('programs', ProgramSchema);

export default program;
