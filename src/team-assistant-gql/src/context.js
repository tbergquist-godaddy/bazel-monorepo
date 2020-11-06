// @flow

import type { $Request } from 'express';

import type { JwtPayload } from './middleware/auth';

type Context = {
  user: JwtPayload | null,
};
type Request = $ReadOnly<{
  ...$Request,
  user: JwtPayload | null,
  ...
}>;

export default function createContext(req: Request): Context {
  return {
    user: req.user,
  };
}
