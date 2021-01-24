// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import globalID from '@adeira/graphql-global-id';
import { weekConnectionResolver } from '@tj-gql/application/resolvers';
import { connectionArgs } from '@adeira/graphql-relay';

import { WeekConnection } from '../week';

const Program: GraphQLObjectType = new GraphQLObjectType({
  name: 'Program',
  description: 'Program model',
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

export default Program;
