// @flow

import { GraphQLObjectType, type GraphQLObjectTypeConfig } from 'graphql';
import { connectionDefinitions } from '@adeira/graphql-relay';
import type { GraphQLConnectionDefinitions } from '@tj-gql/application/services';
import { register, type LoaderFunction } from '@tj-gql/application/queries/node';

type Options = $ReadOnly<{
  register?: LoaderFunction,
}>;

export default class GraphQLBaseObject {
  graphqlObject: GraphQLObjectType;

  constructor(config: GraphQLObjectTypeConfig<any, any>, options?: Options) {
    this.graphqlObject = new GraphQLObjectType(config);

    if (options?.register != null) {
      // $FlowFixMe[prop-missing]
      register(config.name, this.graphqlObject, options.register);
    }
  }

  getGraphqlObject: () => GraphQLObjectType = () => {
    return this.graphqlObject;
  };

  getConnectionDefinitions: () => GraphQLConnectionDefinitions = () => {
    return connectionDefinitions({
      nodeType: this.graphqlObject,
    });
  };
}
