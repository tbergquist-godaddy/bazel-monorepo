// @flow

import Dataloader from 'dataloader';

import type { User as LoggedInUser } from '../types';
import SearchTvShowLoader from './search/dataloaders/SearchTvShowLoader';
import UserLoader from './account/dataloaders/UserLoader';
import TvDetailLoader from './tvshow/dataloaders/TvDetailLoader';
import EpisodesLoader from './episode/dataloaders/EpisodesLoader';
import EpisodeLoader from './episode/dataloaders/EpisodeLoader';
import FavoritesLoader from './tvshow/dataloaders/FavoritesLoader';
import EpisodeWatchedLoader from './episode/dataloaders/EpisodeWatched';
import type { Episode, EpisodeWatched } from './episode/Episode';
import type { User } from './account/Account';

export type TvHelperDataLoaders = {|
  +searchTvShow: Dataloader<string, $FlowFixMe>,
  +user: Dataloader<string, ?User>,
  +tvDetail: Dataloader<string, $FlowFixMe>,
  +episodes: Dataloader<string, Episode[]>,
  +episode: Dataloader<string, Episode>,
  +favorites: Dataloader<string, $FlowFixMe>,
  +episodeWatched: Dataloader<number, EpisodeWatched>,
|};

export default function getDataloaders(user: ?LoggedInUser): TvHelperDataLoaders {
  return {
    searchTvShow: SearchTvShowLoader(),
    user: UserLoader(),
    tvDetail: TvDetailLoader(),
    episodes: EpisodesLoader(),
    episode: EpisodeLoader(),
    favorites: FavoritesLoader(),
    episodeWatched: EpisodeWatchedLoader(user),
  };
}
