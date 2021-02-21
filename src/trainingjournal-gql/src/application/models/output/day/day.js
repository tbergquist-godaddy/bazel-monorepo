// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import globalID from '@adeira/graphql-global-id';
import { setConnectionResolver } from '@tj-gql/application/resolvers';
import { nodeInterface } from '@tj-gql/application/queries/node';
import { GraphqlBaseObject, type GraphQLConnectionDefinitions } from '@tj-gql/application/services';

import { SetConnection } from '../set';

const name = 'Day';

const DayObject: GraphqlBaseObject = new GraphqlBaseObject(
  {
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
  },
  {
    register: (id, context) => {
      return context.dataloader.day.load(id);
    },
  },
);

const Day: GraphQLObjectType = DayObject.getGraphqlObject();
const {
  connectionType: DayConnection,
  edgeType: DayEdge,
}: GraphQLConnectionDefinitions = DayObject.getConnectionDefinitions();

export { Day, DayConnection, DayEdge };
