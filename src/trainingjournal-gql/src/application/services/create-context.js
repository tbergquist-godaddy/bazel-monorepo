// @flow

import { type $Request } from 'express';

import createDataloaders, { type Dataloaders } from './create-dataloaders';

type JwtPayload = {
  +id: string,
  +email: string,
};
type Request = $ReadOnly<{
  ...$Request,
  +user: JwtPayload | null,
  ...
}>;

export type User = {
  +id: string,
  +email: string,
};

type Context = {
  +dataloader: Dataloaders,
};

export type GraphqlContext = $ReadOnly<{
  user: ?User,
  ...Context,
}>;

export type GraphqlLoggedInContext = $ReadOnly<{
  user: User,
  ...Context,
}>;

export default function createContext(request: Request): GraphqlContext {
  return {
    user: request.user,
    dataloader: createDataloaders(),
  };
}
