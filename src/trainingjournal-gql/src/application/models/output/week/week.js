// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import globalID from '@adeira/graphql-global-id';

const Week: GraphQLObjectType = new GraphQLObjectType({
  name: 'Week',
  description: 'Week model',
  fields: {
    id: globalID(({ _id: id }) => id),
    name: { type: GraphQLString },
  },
});

export default Week;
