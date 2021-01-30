// @flow

import { connectionDefinitions } from '@adeira/graphql-relay';
import { type GraphQLConnectionDefinitions } from '@tj-gql/application/services';

import Set from './set';

const { connectionType: SetConnection, edgeType: SetEdge } = (connectionDefinitions({
  nodeType: Set,
}): GraphQLConnectionDefinitions);

export { SetConnection, SetEdge };
