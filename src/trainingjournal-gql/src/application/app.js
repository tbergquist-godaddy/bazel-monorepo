// @flow

import express, { type $Application, type $Request, type $Response } from 'express';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import { graphqlHTTP } from 'express-graphql';
import { UserModel } from '@tj-gql/infrastructure/models';

import schema from './schema';
import { createContext } from './services';

const app: $Application<> = express();

let user;

UserModel.findOne({ email: 'test@test.com' }).then((res) => {
  user = res;
});

const getAuth = (email) => {
  if (email === 'test@test.com' && user != null) {
    const { _id: id, email } = user;
    return { id, email };
  }
  return null;
};

function createGraphqlServer(req: any) {
  // TODO: Use real authentication
  req.user = getAuth(req.headers.authorization);
  return graphqlHTTP({
    schema,
    graphiql: true,
    context: createContext(req),
  });
}

app.use(cors({ methods: ['GET', 'POST'] }));
app.use(compression());
app.use(morgan('dev'));

app.use('/', (request: $Request, response: $Response) => {
  return createGraphqlServer(request)(request, response);
});

export default app;
