// @flow

import { GraphQLID, GraphQLNonNull, GraphQLScalarType } from 'graphql';
import { fromGlobalId } from '@adeira/graphql-global-id';
import { type OpaqueIDString } from '@adeira/graphql-global-id/src/Encoder';

import FavoritesRepository from '../../../database/models/favorites';
import type { GraphqlContextType } from '../../../services/createGraphqlContext';
import AddFavorite from '../types/output/AddFavorite';
import type { TvShow } from '../TvShow';

type Args = {
  +serieId: OpaqueIDString,
  ...
};

type Resolver = {
  +success: boolean,
  +tvShow: TvShow | null,
};

export default {
  type: AddFavorite,
  description: 'Add tv show to favorite list',
  args: {
    serieId: {
      type: (GraphQLNonNull(GraphQLID): GraphQLNonNull<GraphQLScalarType>),
    },
  },
  resolve: async (
    _: mixed,
    args: Args,
    { user, dataLoader }: GraphqlContextType,
  ): Promise<Resolver> => {
    const serieId = fromGlobalId(args.serieId);
    const userId = user?.id;
    if (userId == null) {
      return { success: false, tvShow: null };
    }
    const serie = await FavoritesRepository.createFavorite(userId, serieId);
    const tvShow = await dataLoader.tvhelper.tvDetail.load(serie.serieId.toString());

    return {
      success: true,
      tvShow,
    };
  },
};
