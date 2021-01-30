// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import globalID from '@adeira/graphql-global-id';
import { setConnectionResolver } from '@tj-gql/application/resolvers';

import { SetConnection } from '../set';

const Day: GraphQLObjectType = new GraphQLObjectType({
  name: 'Day',
  description: 'Day model',
  fields: {
    id: globalID(({ _id: id }) => id),
    name: { type: GraphQLString },
    sets: {
      type: SetConnection,
      resolve: setConnectionResolver,
    },
  },
});

export default Day;
