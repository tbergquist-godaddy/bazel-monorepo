// @flow

import { GraphQLObjectType } from 'graphql';

import me from './me';
import { nodeField } from './node/node';

const RootQuery: GraphQLObjectType = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    me,
    node: nodeField,
  },
});

export default RootQuery;
