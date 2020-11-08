// @flow

import { connectionDefinitions } from '@adeira/graphql-relay';
import { GraphQLObjectType } from 'graphql';

import Team from './team';

type GraphQLConnectionDefinitions = {
  edgeType: GraphQLObjectType,
  connectionType: GraphQLObjectType,
  ...
};

const { connectionType: TeamConnection } = (connectionDefinitions({
  nodeType: Team,
}): GraphQLConnectionDefinitions);

export default TeamConnection;
