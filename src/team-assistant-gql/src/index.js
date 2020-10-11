/* eslint-disable no-console */
// @flow

import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';

import schema from './schema';
import connection from './database/connection';

const uri = process.env.MONGO_DB_URL ?? 'mongodb://127.0.0.1:27017/team_assistant';
connection.openUri(uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
});

const server = new ApolloServer({ schema });

const app = express();
app.use(cors({ methods: ['GET', 'POST'] }));
app.use(compression());
app.use(morgan('dev'));

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);
