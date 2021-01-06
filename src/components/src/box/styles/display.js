// @flow

import type { MediaObjectOr } from './types';
import styles from '../../utilities/display.module.css';

type DisplayEnum = 'block' | 'inline' | 'inline-block' | 'flex';
export type Display = MediaObjectOr<DisplayEnum>;

export default function getDisplayStyles(display: ?Display): ?string {
  if (display == null) {
    return null;
  }
  if (typeof display === 'string') {
    return styles[`u-display-${display}`];
  }
  const classes = [];

  for (const key of Object.keys(display)) {
    if (key === '_') {
      classes.push(styles[`u-display-${display._}`]);
    } else {
      classes.push(styles[`u-display-${display[key]}-${key}`]);
    }
  }

  return classes.join(' ');
}
