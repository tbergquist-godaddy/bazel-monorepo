// @flow

import Login from './account/mutation/Login';
import CreateUser from './account/mutation/CreateUser';
import ChangePassword from './account/mutation/ChangePassword';
import AddFavorite from './tvshow/mutations/AddFavorite';
import DeleteFavorite from './tvshow/mutations/DeleteFavorite';
import MarkAsWatched from './episode/mutations/MarkAsWatchted';
import DeleteWatchedEpisode from './episode/mutations/DeleteWatchedEpisode';

export default {
  addFavorite: AddFavorite,
  createUser: CreateUser,
  deleteFavorite: DeleteFavorite,
  deleteWatchedEpisode: DeleteWatchedEpisode,
  markAsWatched: MarkAsWatched,
  tvHelperLogin: Login,
  tvHelperChangePassword: ChangePassword,
};
