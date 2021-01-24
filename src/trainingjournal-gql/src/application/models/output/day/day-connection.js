// @flow

import { connectionDefinitions } from '@adeira/graphql-relay';
import type { GraphQLConnectionDefinitions } from '@tj-gql/application/services';

import Day from './day';

const { connectionType: DayConnection, edgeType: DayEdge } = (connectionDefinitions({
  nodeType: Day,
}): GraphQLConnectionDefinitions);

export { DayConnection, DayEdge };
