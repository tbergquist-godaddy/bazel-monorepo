// @flow

import express, { type $Application, type $Request, type $Response } from 'express';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import { graphqlHTTP } from 'express-graphql';

import schema from './schema';

const app: $Application<> = express();

function createGraphqlServer() {
  return graphqlHTTP({
    schema,
    graphiql: true,
  });
}

app.use(cors({ methods: ['GET', 'POST'] }));
app.use(compression());
app.use(morgan('dev'));

app.use('/', (request: $Request, response: $Response) => {
  return createGraphqlServer(request)(request, response);
});

export default app;
