// @flow

import mongoose, { type MongooseConnection } from 'mongoose';

export const tvHelperConnection: MongooseConnection = mongoose.createConnection();
export const graphqlConnection: MongooseConnection = mongoose.createConnection();

mongoose.set('debug', __DEV__);
