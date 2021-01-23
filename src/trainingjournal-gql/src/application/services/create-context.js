// @flow

import { type $Request } from 'express';

type JwtPayload = {
  +id: string,
  +email: string,
};
type Request = $ReadOnly<{
  ...$Request,
  +user: JwtPayload | null,
  ...
}>;

type User = {
  +id: string,
  +email: string,
};
export type GraphqlContext = {
  +user: ?User,
};

export default function createContext(request: Request): GraphqlContext {
  return {
    user: request.user,
  };
}
