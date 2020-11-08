// @flow

import globalId from '@adeira/graphql-global-id';
import { GraphQLObjectType, GraphQLString } from 'graphql';

const Team: GraphQLObjectType = new GraphQLObjectType({
  name: 'Team',
  description: 'A team',
  fields: {
    id: globalId(({ id }) => id),
    name: { type: GraphQLString },
  },
});

export default Team;
