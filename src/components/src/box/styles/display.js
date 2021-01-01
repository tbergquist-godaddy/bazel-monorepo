// @flow

import type { MediaObjectOr } from './types';
import '../../utilities/display.css';

type DisplayEnum = 'block' | 'inline' | 'inline-block' | 'flex';
export type Display = MediaObjectOr<DisplayEnum>;

export default function getDisplayStyles(display: ?Display): ?string {
  if (display == null) {
    return null;
  }
  if (typeof display === 'string') {
    return `u-display-${display}`;
  }
  const classes = [];

  for (const key of Object.keys(display)) {
    if (key === '_') {
      classes.push(`u-display-${display._}`);
    } else {
      classes.push(`u-display-${display[key]}-${key}`);
    }
  }

  return classes.join(' ');
}
