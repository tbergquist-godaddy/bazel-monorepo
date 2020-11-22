// @flow

import { GraphQLObjectType, GraphQLBoolean } from 'graphql';

import TvShowNode from './TvShowNode';

export default (new GraphQLObjectType({
  name: 'AddFavorite',
  description: 'The return type for the add favorite mutation',
  fields: {
    success: {
      type: GraphQLBoolean,
    },
    tvShow: {
      type: TvShowNode, // TODO: Refactor to use edge from connection,
    },
  },
}): GraphQLObjectType);
