// @flow

import { GraphQLID, GraphQLNonNull, GraphQLScalarType } from 'graphql';
import { fromGlobalId } from '@adeira/graphql-global-id';
import { type OpaqueIDString } from '@adeira/graphql-global-id/src/Encoder';

import WatchedEpisodeRepository from '../../../database/models/watched-episode';
import type { GraphqlContextType } from '../../../services/createGraphqlContext';
import EpisodeWatched from '../types/output/EpisodeWatched';

type Args = {
  +episodeId: OpaqueIDString,
  ...
};

type Resolver = {
  +success: boolean,
  +episode: null | { +id: string, +isWatched: boolean },
};

export default {
  type: EpisodeWatched,
  description: 'Mark an episode as watched',
  args: {
    episodeId: {
      type: (GraphQLNonNull(GraphQLID): GraphQLNonNull<GraphQLScalarType>),
    },
  },
  resolve: async (_: mixed, args: Args, { user }: GraphqlContextType): Promise<Resolver> => {
    const userId = user?.id;
    const episodeId = fromGlobalId(args.episodeId);

    if (userId == null) {
      return { success: false, episode: null };
    }
    await WatchedEpisodeRepository.markAsWatched(userId, parseInt(episodeId, 10));

    return { success: true, episode: { id: episodeId, isWatched: true } };
  },
};
