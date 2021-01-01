// @flow

/* eslint-disable sx/valid-usage */
import { create } from '@adeira/sx';

import breakpoints, { breakpointsMap } from '../../breakpoints';
import type { MediaObjectOr } from './types';

type DisplayEnum = 'block' | 'inline' | 'inline-block' | 'flex';
export type Display = MediaObjectOr<DisplayEnum>;

const displayValues: $ReadOnlyArray<DisplayEnum> = ['block', 'inline', 'inline-block', 'flex'];
const styleMap = {};

for (const bp of breakpointsMap) {
  for (const value of displayValues) {
    if (bp === '') {
      styleMap[`${bp}${value}`] = { display: value };
    } else {
      styleMap[`${bp}${value}`] = {
        [breakpoints[bp]]: { display: value },
      };
    }
  }
}

const styles = create(styleMap);

export default function getDisplayStyles(display: ?Display): ?string {
  if (display == null) {
    return null;
  }
  if (typeof display === 'string') {
    // $FlowExpectedError[incompatible-call]
    return styles(display);
  }
  const classes = [];

  for (const key of Object.keys(display)) {
    if (key === '_') {
      classes.push(display._);
    } else {
      const value = `${key}${display[key]}`;
      classes.push(value);
    }
  }

  return styles(...classes);
}
