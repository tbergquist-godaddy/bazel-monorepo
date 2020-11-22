// @flow

import DataLoader from 'dataloader';

import fetch from '../../../services/fetch';
import { type Episode } from '../Episode';

const fetchEpisodes = async (serieIds: $ReadOnlyArray<string>) => {
  const responses: $ReadOnlyArray<Episode[]> = await Promise.all(
    serieIds.map((id) => fetch(`http://api.tvmaze.com/shows/${id}/episodes`)),
  );
  return responses;
};

const TvShowEpisodeLoader = (): DataLoader<string, Array<Episode>, string> =>
  new DataLoader<string, Episode[]>(fetchEpisodes);

export default TvShowEpisodeLoader;
