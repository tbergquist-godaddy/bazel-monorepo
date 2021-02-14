// @flow

import { GraphQLInterfaceType, type GraphQLFieldConfig } from 'graphql';
import { nodeDefinitions } from '@adeira/graphql-relay';
import { decode } from '@adeira/graphql-global-id/src/Encoder';
import type { GraphqlContext } from '@tj-gql/application/services';

import { getType } from './type-store';

type GraphQLNodeDefinitions<TContext> = {
  nodeInterface: GraphQLInterfaceType,
  nodeField: GraphQLFieldConfig<any, TContext>,
  nodesField: GraphQLFieldConfig<any, TContext>,
  ...
};

async function loadType(relayId, context) {
  // $FlowExpectedError[incompatible-call] Cannot call fromGlobalId with relayId bound to opaqueID because string [1] is incompatible with OpaqueIDString
  const decoded = decode(relayId);
  const [__type, id]: any[] = decoded.split(':');
  const type = getType(__type);

  if (type == null) {
    return null;
  }
  const entity = await type.loader(id, context);

  if (entity == null) {
    return null;
  }

  return {
    ...entity,
    __type: type.type,
  };
}

function detectType(value) {
  return value.__type;
}

export const { nodeInterface, nodeField } = (nodeDefinitions<GraphqlContext>(
  loadType,
  detectType,
): GraphQLNodeDefinitions<GraphqlContext>);
