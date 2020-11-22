// @flow

import DataLoader from 'dataloader';

import fetch from '../../../services/fetch';
import { type Episode } from '../Episode';

const fetchEpisode = (ids: $ReadOnlyArray<string>) => {
  return Promise.all(ids.map((id) => fetch(`http://api.tvmaze.com/episodes/${id}`)));
};

const EpisodeLoader = (): DataLoader<string, Episode, string> =>
  new DataLoader<string, Episode>(fetchEpisode);

export default EpisodeLoader;
