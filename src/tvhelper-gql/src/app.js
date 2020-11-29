// @flow

import express, { type $Request, type $Response, type $Application } from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import passport from 'passport';
import passportJwt from 'passport-jwt';

import Schema from './Schema';
import createGraphqlContext from './services/createGraphqlContext';
import { jwtFromRequest, tokenToUser, attachUserToRequest } from './services/auth';
import getPersistedQuery from './middleware/getPersistedQuery';
import type { Request } from './types';
import loadConfig from './services/load-config';

loadConfig();

const { JWT_SECRET } = process.env;

passport.use(
  new passportJwt.Strategy(
    {
      secretOrKey: JWT_SECRET,
      jwtFromRequest,
    },
    tokenToUser,
  ),
);

const app: $Application<> = express();
app.use(cors({ methods: ['GET', 'POST'] }));
app.use(compression());
app.use(morgan('dev'));
passport.initialize();

function createGraphqlServer(request: Request) {
  return graphqlHTTP({
    schema: Schema,
    graphiql: true,
    context: createGraphqlContext(request),
  });
}

// $FlowExpectedError[incompatible-call]
app.use('/', attachUserToRequest, getPersistedQuery(), (request: $Request, response: $Response) => {
  // $FlowExpectedError[prop-missing]
  return createGraphqlServer(request)(request, response);
});

export default app;
