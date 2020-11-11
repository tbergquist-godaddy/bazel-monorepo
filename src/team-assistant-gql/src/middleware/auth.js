// @flow

import { type $Request, type $Response, type NextFunction } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

import UserModel from '../database/models/users';

const { JWT_SECRET } = process.env;

export type JwtPayload = {|
  +iss?: string,
  +email: string,
  +id: string,
|};

type DoneFunction = (null, ?JwtPayload) => void;

export const jwtFromRequest = (request: $Request): void | string => {
  return request.get('Authorization');
};

export const tokenToUser = async (jwtPayload: JwtPayload, done: DoneFunction) => {
  const user = await UserModel.getByEmail(jwtPayload.email);
  if (user != null) {
    done(null, {
      id: user._id,
      email: user.email,
    });
  } else {
    done(null, null);
  }
};

export const attachUserToRequest = (req: $Request, res: $Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (user) {
      // $FlowExpectedError[prop-missing]
      req.user = user;
    } else if (err) {
      // $FlowExpectedError[prop-missing]
      req.user = null;
    }

    next();
  })(req, res, next);
};

export const signToken = ({ email, id }: { +email: string, +id: string }): string =>
  jwt.sign({ id, email }, JWT_SECRET, {
    expiresIn: '1d',
    issuer: 'team_assistant',
  });
