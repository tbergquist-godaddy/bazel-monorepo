// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import globalID from '@adeira/graphql-global-id';
import { connectionFromArray } from '@adeira/graphql-relay';

import { DayConnection } from '../day';

const Week: GraphQLObjectType = new GraphQLObjectType({
  name: 'Week',
  description: 'Week model',
  fields: {
    id: globalID(({ _id: id }) => id),
    name: { type: GraphQLString },
    days: {
      type: DayConnection,
      resolve: ({ days }, args) => connectionFromArray(days, args),
    },
  },
});

export default Week;
