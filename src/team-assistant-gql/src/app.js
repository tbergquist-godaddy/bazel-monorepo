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
  // $FlowExpectedError[incompatible-exact]: graphqlHTTP uses types from node http module
  // $FlowExpectedError[incompatible-call]: graphqlHTTP uses types from node http module
  return createGraphqlServer()(request, response);
});

export default app;
