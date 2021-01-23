// @flow

import mongoose, { type MongooseConnection } from 'mongoose';

const connection: MongooseConnection = mongoose.createConnection();

mongoose.set('debug', process.env.MONGO_DEBUG != null);

export default connection;
