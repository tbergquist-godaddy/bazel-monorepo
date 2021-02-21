// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import globalID from '@adeira/graphql-global-id';
import { connectionFromArray, connectionArgs } from '@adeira/graphql-relay';
import { GraphqlBaseObject, type GraphQLConnectionDefinitions } from '@tj-gql/application/services';

import { DayConnection } from '../day';

const week: GraphqlBaseObject = new GraphqlBaseObject({
  name: 'Week',
  description: 'Week model',
  fields: {
    id: globalID(({ _id: id }) => id),
    name: { type: GraphQLString },
    days: {
      type: DayConnection,
      resolve: ({ days }, args) => connectionFromArray(days, args),
      args: connectionArgs,
    },
  },
});

const Week: GraphQLObjectType = week.getGraphqlObject();
const {
  connectionType: WeekConnection,
  edgeType: WeekEdge,
}: GraphQLConnectionDefinitions = week.getConnectionDefinitions();

export { Week, WeekConnection, WeekEdge };
