// @flow

import { Schema, Model, type MongoId } from 'mongoose';

import { tvHelperConnection } from '../connections';

const FavoritesSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  serieId: {
    type: Number,
  },
});

export class FavoritesModel extends Model {
  _id: MongoId;
  userId: MongoId;
  serieId: number;

  static async getFavorites(userIds: $ReadOnlyArray<string>): Promise<$ReadOnlyArray<this>> {
    const favorites = await this.find({ userId: { $in: userIds } });
    return favorites;
  }

  static async createFavorite(userId: MongoId, serieId: MongoId): Promise<this> {
    const favorite = await this.create({ userId, serieId });
    return favorite;
  }

  static async deleteFavorite(userId: string, serieId: string): Promise<boolean> {
    const response = await this.deleteOne({ userId, serieId });
    return response.ok && response.deletedCount > 0;
  }
}

FavoritesSchema.loadClass(FavoritesModel);

FavoritesSchema.index({ userId: 1, serieId: -1 }, { unique: true });
const favorites: Class<FavoritesModel> = tvHelperConnection.model('favorites', FavoritesSchema);

export default favorites;
