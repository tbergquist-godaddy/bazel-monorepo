// @flow strict

import type { TvShow } from '../tvshow/TvShow';

export type SearchTvShowType = $ReadOnlyArray<{|
  +show: TvShow,
|}>;
