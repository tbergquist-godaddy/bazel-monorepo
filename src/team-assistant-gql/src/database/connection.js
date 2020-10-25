// @flow strict

import mongoose, { type MongooseConnection } from 'mongoose';

const connection: MongooseConnection = mongoose.createConnection();

const debug = process.env.DEBUG != null;
mongoose.set('debug', debug);

export default connection;
