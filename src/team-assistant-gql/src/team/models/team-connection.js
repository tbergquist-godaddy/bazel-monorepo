// @flow

import { connectionDefinitions } from '@adeira/graphql-relay';
import { GraphQLObjectType } from 'graphql';

import Team from './team';

type GraphQLConnectionDefinitions = {
  edgeType: GraphQLObjectType,
  connectionType: GraphQLObjectType,
  ...
};

const { connectionType: TeamConnection, edgeType: TeamEdge } = (connectionDefinitions({
  nodeType: Team,
}): GraphQLConnectionDefinitions);

export { TeamConnection, TeamEdge };
