// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import globalID from '@adeira/graphql-global-id';
import { weekConnectionResolver } from '@tj-gql/application/resolvers';
import { connectionArgs } from '@adeira/graphql-relay';
import { nodeInterface } from '@tj-gql/application/queries/node';
import { GraphqlBaseObject, type GraphQLConnectionDefinitions } from '@tj-gql/application/services';

import { WeekConnection } from '../week';

const name = 'Program';

const program: GraphqlBaseObject = new GraphqlBaseObject(
  {
    name,
    description: 'Program model',
    interfaces: [nodeInterface],
    fields: {
      id: globalID(({ _id: id }) => id),
      name: { type: GraphQLString },
      weeks: {
        type: WeekConnection,
        resolve: weekConnectionResolver,
        args: connectionArgs,
      },
    },
  },
  {
    register: (id, context) => {
      return context.dataloader.program.load(id);
    },
  },
);

const Program: GraphQLObjectType = program.getGraphqlObject();
const {
  connectionType: ProgramConnection,
  edgeType: ProgramEdge,
}: GraphQLConnectionDefinitions = program.getConnectionDefinitions();

export { Program, ProgramConnection, ProgramEdge };
