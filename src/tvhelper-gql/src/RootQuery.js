// @flow

import { GraphQLObjectType } from 'graphql';

import TvhelperQueries from './tvhelper/TvhelperQueries';
import viewer from './common/queries/Viewer';
import { nodeField } from './node/node';

const RootQuery: GraphQLObjectType = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    ...TvhelperQueries,
    viewer,
    node: nodeField,
  },
});

export default RootQuery;
