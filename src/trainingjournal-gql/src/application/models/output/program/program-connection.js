// @flow

import { connectionDefinitions } from '@adeira/graphql-relay';
import { GraphQLObjectType } from 'graphql';

import Program from './program';

type GraphQLConnectionDefinitions = {
  edgeType: GraphQLObjectType,
  connectionType: GraphQLObjectType,
  ...
};

const { connectionType: ProgramConnection, edgeType: ProgramEdge } = (connectionDefinitions({
  nodeType: Program,
}): GraphQLConnectionDefinitions);

export { ProgramConnection, ProgramEdge };
