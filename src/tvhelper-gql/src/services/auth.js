// @flow

import { type $Request, type $Response, type NextFunction } from 'express';
import passport from 'passport';

import UserRepository from '../database/models/user';
import type { Request } from '../types';

type JwtPayload = {|
  +iss: string,
  +username: string,
  +token?: string,
|};

export const jwtFromRequest = (request: $Request): void | string => {
  return request.get('Authorization');
};

export const tokenToUser = async (
  jwtPayload: JwtPayload,
  done: (null, ?{ [string]: mixed }) => void,
) => {
  const user = await UserRepository.findUser(jwtPayload.username);
  if (user != null) {
    done(null, {
      id: user._id,
      username: user.username,
      email: user.email,
    });
  } else {
    done(null, null);
  }
};

export const attachUserToRequest = (req: Request, res: $Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (user) {
      req.user = user;
    } else if (err) {
      req.user = null;
    }

    next();
  })(req, res, next);
};
