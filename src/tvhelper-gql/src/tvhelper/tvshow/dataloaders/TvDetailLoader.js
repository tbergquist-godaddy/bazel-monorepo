// @flow

import DataLoader from 'dataloader';

import fetch from '../../../services/fetch';
import redis from '../../../services/redis';
import type { TvShow } from '../TvShow';

const fetchTvDetail = async (ids: $ReadOnlyArray<string>) => {
  const responses = await Promise.allSettled(
    ids.map((id) =>
      fetch(
        `http://api.tvmaze.com/shows/${id}?embed[]=episodes&embed[]=nextepisode&embed[]=previousepisode&embed[]=cast`,
      ),
    ),
  );
  const data = responses.map(async (promise, index) => {
    let response;
    const redisKey = `show:${ids[index]}`;

    if (promise.status === 'rejected') {
      const cache = await redis.get(redisKey);
      if (cache == null) {
        return null;
      }
      response = JSON.parse(cache);
    } else if (promise.status === 'fulfilled') {
      response = promise.value;
    } else {
      response = null;
    }
    return response;
  });
  const resolvedData = await Promise.allSettled(data);
  return resolvedData.map((promise, index) => {
    const redisKey = `show:${ids[index]}`;
    if (promise.status === 'rejected' || promise.value == null) {
      return null;
    }
    const response = promise.value;
    const nextDate = response?._embedded?.nextepisode?.airdate ?? null;
    const previousDate = response?._embedded?.previousepisode?.airdate ?? null;
    const data = {
      ...response,
      ...(response._embedded
        ? {
            _embedded: {
              ...response._embedded,
              nextepisode: {
                ...response._embedded.nextepisode,
                airdate: nextDate !== null ? new Date(nextDate) : null,
              },
              previousepisode: {
                ...response._embedded.previousepisode,
                airdate: previousDate !== null ? new Date(previousDate) : null,
              },
            },
          }
        : {}),
    };
    redis.set(redisKey, JSON.stringify(data));
    return data;
  });
};

const TvDetailLoader = (): DataLoader<string, ?TvShow, string> =>
  new DataLoader<string, ?TvShow>(fetchTvDetail);

export default TvDetailLoader;
