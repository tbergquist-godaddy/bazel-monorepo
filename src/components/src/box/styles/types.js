// @flow

import { breakpoints } from '../../breakpoints';

export type MediaObjectOr<T> =
  | $Shape<{
      _: T,
      ...$ObjMap<typeof breakpoints, () => T>,
    }>
  | T;

export type CSSSides = 'top' | 'right' | 'bottom' | 'left';
