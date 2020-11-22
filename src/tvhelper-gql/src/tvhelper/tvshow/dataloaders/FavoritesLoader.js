// @flow

import DataLoader from 'dataloader';

import FavoritesRepository, {
  FavoritesModel as FavoriteType,
} from '../../../database/models/favorites';

const fetchFavorites = async (userIds: $ReadOnlyArray<string>) => {
  const responses = await FavoritesRepository.getFavorites(userIds);
  return userIds.map((userId) =>
    responses.filter((response) => {
      return response.userId.toString() === userId.toString();
    }),
  );
};

const FavoritesLoader = (): DataLoader<string, Array<FavoriteType>, string> =>
  new DataLoader<string, FavoriteType[]>((userIds: $ReadOnlyArray<string>) =>
    fetchFavorites(userIds),
  );

export default FavoritesLoader;
