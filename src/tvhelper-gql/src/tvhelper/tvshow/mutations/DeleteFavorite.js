// @flow

import { GraphQLID, GraphQLNonNull, GraphQLScalarType } from 'graphql';
import { fromGlobalId } from '@adeira/graphql-global-id';
import { type OpaqueIDString } from '@adeira/graphql-global-id/src/Encoder';

import RangeDelete from '../../common/types/output/range-delete';
import FavoritesRepository from '../../../database/models/favorites';
import { type GraphqlContextType } from '../../../services/createGraphqlContext';

type Args = {
  +serieId: OpaqueIDString,
  ...
};

const failObject = { success: false, id: null };

type Resolver = {
  +success: boolean,
  +id: string | null,
};

export default {
  type: RangeDelete,
  description: 'Remove tv show from favorite list',
  args: {
    serieId: {
      type: (GraphQLNonNull(GraphQLID): GraphQLNonNull<GraphQLScalarType>),
    },
  },
  resolve: async (_: mixed, args: Args, { user }: GraphqlContextType): Promise<Resolver> => {
    const userId = user?.id;
    if (userId == null) {
      return failObject;
    }
    const serieId = fromGlobalId(args.serieId);
    try {
      const success = await FavoritesRepository.deleteFavorite(userId, serieId);
      return {
        success,
        id: args.serieId,
      };
    } catch {
      return failObject;
    }
  },
};
