// @flow

import DataLoader from 'dataloader';

import fetch from '../../../services/fetch';
import type { TvShow } from '../../tvshow/TvShow';

const fetchTvShows = async (queries: $ReadOnlyArray<string>) => {
  const responses = await Promise.allSettled(
    queries.map((query) =>
      fetch(
        `http://api.tvmaze.com/search/shows?q=${query}&embed[]=nextepisode&embed[]=previousepisode`,
      ),
    ),
  );

  return responses.map((response) => {
    if (response.status === 'fulfilled') {
      return response.value.map((item) => item.show);
    }
    return [null];
  });
};

const SearchTvShowLoader = (): DataLoader<string, Array<TvShow | null>, string> =>
  new DataLoader<string, Array<TvShow | null>>(fetchTvShows);

export default SearchTvShowLoader;
