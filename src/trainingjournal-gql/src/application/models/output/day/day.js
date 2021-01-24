// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import globalID from '@adeira/graphql-global-id';

const Day: GraphQLObjectType = new GraphQLObjectType({
  name: 'Day',
  description: 'Day model',
  fields: {
    id: globalID(({ _id: id }) => id),
    name: { type: GraphQLString },
  },
});

export default Day;
