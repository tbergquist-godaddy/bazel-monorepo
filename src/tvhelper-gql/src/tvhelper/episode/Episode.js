// @flow strict

export type Episode = {|
  +id: number,
  +name: string,
  +season: number,
  +number: number,
  +airdate: Date,
  +image: {| +medium: string, +original: string |},
  +summary: string,
  +isWatched?: boolean,
|};

export type EpisodeWatched = {|
  +userId: number,
  +episodeId: number,
  +id: number,
|};
