// @flow

import { connectionDefinitions } from '@adeira/graphql-relay';
import { GraphQLObjectType } from 'graphql';

import Exercise from './exercise';

type GraphQLConnectionDefinitions = {
  edgeType: GraphQLObjectType,
  connectionType: GraphQLObjectType,
  ...
};

const { connectionType: ExerciseConnection, edgeType: ExerciseEdge } = (connectionDefinitions({
  nodeType: Exercise,
}): GraphQLConnectionDefinitions);

export { ExerciseConnection, ExerciseEdge };
