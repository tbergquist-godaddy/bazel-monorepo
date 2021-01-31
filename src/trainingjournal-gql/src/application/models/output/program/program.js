// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import globalID from '@adeira/graphql-global-id';
import { weekConnectionResolver } from '@tj-gql/application/resolvers';
import { connectionArgs } from '@adeira/graphql-relay';
import { register, nodeInterface } from '@tj-gql/application/queries/node';

import { WeekConnection } from '../week';

const name = 'Program';

const Program: GraphQLObjectType = new GraphQLObjectType({
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
});

register(name, Program, (id, context) => {
  return context.dataloader.program.load(id);
});

export default Program;
