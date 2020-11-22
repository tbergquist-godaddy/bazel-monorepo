// @flow

import type { $Request } from 'express';
import type { GraphQLObjectType } from 'graphql';

export type User = {
  +id?: string,
  +username: string,
  +email?: string,
  +token?: string,
} | null;

export type Request = {
  ...$Request,
  user: User,
  ...
};

export type GraphQLConnectionDefinitions = {
  edgeType: GraphQLObjectType,
  connectionType: GraphQLObjectType,
  ...
};
