// @flow

import { type $Request, type $Response, type NextFunction } from 'express';
import passport from 'passport';

import UserModel from '../database/models/users';

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
      id: user.email,
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
