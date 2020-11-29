// @flow

import express, { type $Application, type $Request, type $Response } from 'express';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import { graphqlHTTP } from 'express-graphql';
import passport from 'passport';
import passportJwt from 'passport-jwt';
import { config } from 'dotenv';

import schema from './schema';
import { jwtFromRequest, tokenToUser, attachUserToRequest } from './middleware/auth';
import createContext from './context';

config();

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

function createGraphqlServer(req) {
  return graphqlHTTP({
    schema,
    graphiql: true,
    // $FlowExpectedError[prop-missing]
    context: createContext(req),
  });
}

app.use(cors({ methods: ['GET', 'POST'] }));
app.use(compression());
app.use(morgan('dev'));

app.use('/', attachUserToRequest, (request: $Request, response: $Response) => {
  return createGraphqlServer(request)(request, response);
});

export default app;
