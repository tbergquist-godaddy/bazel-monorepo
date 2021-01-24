// @flow

import { connectionDefinitions } from '@adeira/graphql-relay';
import { GraphQLObjectType } from 'graphql';

import Week from './week';

type GraphQLConnectionDefinitions = {
  edgeType: GraphQLObjectType,
  connectionType: GraphQLObjectType,
  ...
};

const { connectionType: WeekConnection, edgeType: WeekEdge } = (connectionDefinitions({
  nodeType: Week,
}): GraphQLConnectionDefinitions);

export { WeekConnection, WeekEdge };
