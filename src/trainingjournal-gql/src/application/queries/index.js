// @flow

import { GraphQLObjectType } from 'graphql';

import me from './me';

const RootQuery: GraphQLObjectType = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    me,
  },
});

export default RootQuery;
