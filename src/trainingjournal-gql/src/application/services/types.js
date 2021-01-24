// @flow

import { GraphQLObjectType } from 'graphql';

export type GraphQLConnectionDefinitions = {
  edgeType: GraphQLObjectType,
  connectionType: GraphQLObjectType,
  ...
};
