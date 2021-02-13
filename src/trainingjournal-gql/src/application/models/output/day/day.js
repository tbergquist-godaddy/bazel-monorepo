// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import globalID from '@adeira/graphql-global-id';
import { setConnectionResolver } from '@tj-gql/application/resolvers';
import { register, nodeInterface } from '@tj-gql/application/queries/node';

import { SetConnection } from '../set';

const name = 'Day';

const Day: GraphQLObjectType = new GraphQLObjectType({
  name,
  description: 'Day model',
  interfaces: [nodeInterface],
  fields: {
    id: globalID(({ _id: id }) => id),
    name: { type: GraphQLString },
    sets: {
      type: SetConnection,
      resolve: setConnectionResolver,
    },
  },
});

register(name, Day, (id, context) => {
  return context.dataloader.day.load(id);
});

export default Day;
