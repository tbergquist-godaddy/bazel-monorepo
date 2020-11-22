// @flow strict

import type { Episode } from '../episode/Episode';

export type Person = {|
  +id: string,
  +name: string,
  +image: {| +original: string, +medium: string |},
|};

export type Cast = {|
  +person: Person,
  +character: Person,
|};

export type TvShow = {|
  +id: number,
  +name: string,
  +status: string,
  +premiered: Date,
  +rating: {| +average: number |},
  +summary: string,
  +_embedded?: {|
    +episodes?: ?$ReadOnlyArray<Episode>,
    +nextepisode?: ?Episode,
    +previousepisode?: ?Episode,
    +cast?: ?$ReadOnlyArray<Cast>,
  |},
|};
