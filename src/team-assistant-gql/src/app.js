// @flow

import express, { type $Application } from 'express';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import { ApolloServer } from 'apollo-server-express';

import schema from './schema';

const app: $Application<> = express();
const server = new ApolloServer({ schema });

server.applyMiddleware({ app });
app.use(cors({ methods: ['GET', 'POST'] }));
app.use(compression());
app.use(morgan('dev'));

export default app;
