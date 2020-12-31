// @flow

/* eslint-disable sx/valid-usage */
import { create } from '@adeira/sx';

import breakpoints from '../../breakpoints';
import type { MediaObjectOr } from './types';

export type Display = MediaObjectOr<'block' | 'inline' | 'inlineBlock' | 'flex'>;

const flex = { display: 'flex' };
const block = { display: 'block' };
const inlineBlock = { display: 'inline-block' };
const inline = { display: 'inline' };

const styles = create({
  flex,
  block,
  inlineBlock,
  inline,
  mediumMobileinline: {
    [breakpoints.mediumMobile]: inline,
  },
  desktopflex: {
    [breakpoints.desktop]: flex,
  },
});

export default function getDisplayStyles(display: ?Display): ?string {
  if (display == null) {
    return null;
  }
  if (typeof display === 'string') {
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
