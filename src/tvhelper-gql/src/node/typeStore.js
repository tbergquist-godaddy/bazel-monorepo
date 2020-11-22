// @flow

import type { GraphQLObjectType } from 'graphql';

import type { GraphqlContextType } from '../services/createGraphqlContext';

/**
 * The sole purpose of the file is avoiding circular dependencies.
 * See https://github.com/graphql/graphql-relay-js/issues/113
 */

type LoaderFunction = (
  id: string,
  context: GraphqlContextType,
) => Promise<{ +[key: string]: mixed, ... }>;

type Type = {
  +type: GraphQLObjectType,
  +loader: LoaderFunction,
};
type Types = {|
  TvShow: ?Type,
|};

const types: Types = {
  TvShow: null,
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
