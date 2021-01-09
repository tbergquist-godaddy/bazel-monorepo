// @flow

import { invariant } from '@adeira/js';

import type { GraphqlContextType } from '../../../services/createGraphqlContext';

type DataLoader = $PropertyType<GraphqlContextType, 'dataLoader'>;

export const resolvePreviousEpisode = async (
  dataLoader: DataLoader,
  id: number,
): Promise<null | Date> => {
  const episodes = await await dataLoader.tvhelper.episodes.load(id.toString());
  invariant(Array.isArray(episodes), 'Expected episodes to be of type array.');

  const today = new Date();
  const tomorrow = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate() + 1));
  const dates = episodes.reduce((acc, curr) => {
    if (curr.airdate == null) {
      return acc;
    }
    const airdate = new Date(curr.airdate);
    if (airdate < tomorrow) {
      return [...acc, airdate];
    }
    return acc;
  }, []);
  const date = dates.length > 0 ? new Date(Math.max(...dates.map((date) => date.getTime()))) : null;

  return date;
};

export const resolveNextEpisode = async (
  dataLoader: DataLoader,
  id: number,
): Promise<null | Date> => {
  const episodes = await await dataLoader.tvhelper.episodes.load(id.toString());

  const today = new Date();
  const utcToday = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
  const dates = episodes.reduce((acc, curr) => {
    if (curr.airdate == null) {
      return acc;
    }
    const airdate = new Date(curr.airdate);

    if (airdate >= utcToday) {
      return [...acc, airdate];
    }
    return acc;
  }, []);
  const date = dates.length > 0 ? new Date(Math.min(...dates.map((date) => date.getTime()))) : null;

  return date;
};
