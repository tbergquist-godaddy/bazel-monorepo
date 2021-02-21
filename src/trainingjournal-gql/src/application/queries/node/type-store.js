// @flow

import type { GraphQLObjectType } from 'graphql';
import type { GraphqlContext } from '@tj-gql/application/services';

/**
 * The sole purpose of the file is avoiding circular dependencies.
 * See https://github.com/graphql/graphql-relay-js/issues/113
 */

export type LoaderFunction = (
  id: string,
  context: GraphqlContext,
) => Promise<{ +[key: string]: mixed, ... } | null>;

type Type = {
  +type: GraphQLObjectType,
  +loader: LoaderFunction,
};
type Types = {|
  Program: ?Type,
  Day: ?Type,
|};

const types: Types = {
  Program: null,
  Day: null,
};

export function register(
  type: $Keys<typeof types>,
  value: GraphQLObjectType,
  loader: LoaderFunction,
) {
  types[type] = { type: value, loader };
}

export function getType(type: $Keys<typeof types>): ?Type {
  return types[type];
}
