// @flow

import DataLoader from 'dataloader';

import WatchedEpisodeRepository from '../../../database/models/watched-episode';
import type { User as LoggedInUser } from '../../../types';
import type { EpisodeWatched } from '../Episode';

const loadWatchedEpisode = async (args: $ReadOnlyArray<number>, user: ?LoggedInUser) => {
  const watchedEpisodes = await await WatchedEpisodeRepository.findEpisodes(user?.id, args);

  return args.map((arg) => watchedEpisodes.find((episode) => episode.episodeId === arg));
};

const EpisodeWatchedLoader = (user: ?LoggedInUser): DataLoader<number, EpisodeWatched, number> =>
  new DataLoader<number, EpisodeWatched>((args: $ReadOnlyArray<number>) =>
    loadWatchedEpisode(args, user),
  );

export default EpisodeWatchedLoader;
