// @flow

import { Schema, Model, type MongoId } from 'mongoose';

import { tvHelperConnection as connection } from '../connections';

export type WatchedEpisodeType = {|
  +_id: string,
  +userId: ?string,
  +episodeId: number,
|};

const WatchedEpisodesSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  episodeId: {
    type: Number,
    required: true,
  },
});

WatchedEpisodesSchema.index({ userId: 1, episodeId: -1 }, { unique: true });

class WatchedEpisodeModel extends Model {
  _id: MongoId;
  userId: MongoId;
  episodeId: number;

  static async markAsWatched(userId: string, episodeId: number): Promise<this> {
    const episode = await this.create({ userId, episodeId });
    return episode;
  }

  static async deleteWatchedEpisode(userId: ?string, episodeId: number): Promise<boolean> {
    const response = await this.deleteOne({ userId, episodeId });
    return response.ok && response.deletedCount > 0;
  }

  static async findEpisodes(
    userId: ?string,
    episodeIds: $ReadOnlyArray<number>,
  ): Promise<$ReadOnlyArray<this | null>> {
    // $FlowExpectedError[incompatible-call]
    const episodes = await this.find({ userId, episodeId: { $in: episodeIds } });

    return episodes.map((episode) => (episode == null ? null : new WatchedEpisode(episode)));
  }
}

WatchedEpisodesSchema.loadClass(WatchedEpisodeModel);
const WatchedEpisode: Class<WatchedEpisodeModel> = connection.model(
  'watchedEpisodes',
  WatchedEpisodesSchema,
);

export default WatchedEpisode;
