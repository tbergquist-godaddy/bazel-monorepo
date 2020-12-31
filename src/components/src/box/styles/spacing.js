/* eslint-disable sx/valid-usage */
// @flow

import { create } from '@adeira/sx';

import breakpoints from '../../breakpoints';
import type { MediaObjectOr } from './types';

type SpacingEnum = 'xs' | 'small' | 'normal' | 'l' | 'xl' | 'xxl' | 'none';
export type Spacing = MediaObjectOr<SpacingEnum>;

const styleKeys = {
  xs: 'var(--space-x-small)',
  small: 'var(--space-small)',
  normal: 'var(--space-normal)',
  l: 'var(--space-large)',
  xl: 'var(--space-xl-large)',
  xxl: 'var(--space-xl-large)',
  none: '0',
};

const sides = ['top', 'right', 'bottom', 'normal'];
const sizes = ['xs', 'small', 'normal', 'l', 'xl', 'xxl', 'none'];
const spacings = ['margin', 'padding'];
const breakpointsMap = ['', ...Object.keys(breakpoints)];

const keys = {};

const capitalizeFirst = (word: string): string => {
  return `${word.charAt(0).toUpperCase()}${word.substring(1)}`;
};
for (const space of spacings) {
  keys[space] = {};
  for (const bp of breakpointsMap) {
    for (const side of sides) {
      for (const size of sizes) {
        if (bp === '') {
          keys[space][`${side}${size}`] = {
            [`${space}${capitalizeFirst(side)}`]: styleKeys[size],
          };
        } else {
          keys[space][`${side}${size}${bp}`] = {
            [breakpoints[bp]]: { [`${space}${capitalizeFirst(side)}`]: styleKeys[size] },
          };
        }
      }
    }
  }
}

const margin = create(keys.margin);
const padding = create(keys.padding);

export function getMargin(
  space: ?Spacing,
  side: 'top' | 'right' | 'bottom' | 'normal' | 'none',
): ?string {
  return getSpace(margin, space, side);
}

export function getPadding(
  space: ?Spacing,
  side: 'top' | 'right' | 'bottom' | 'normal' | 'none',
): ?string {
  return getSpace(padding, space, side);
}

function getSpace(
  style: $FlowFixMe,
  space: ?Spacing,
  side: 'top' | 'right' | 'bottom' | 'normal' | 'none',
): ?string {
  if (space == null) {
    return null;
  }
  if (typeof space === 'string') {
    const marginKey = `${side}${space}`;
    return style(marginKey);
  }

  const classes = [];

  for (const k of Object.keys(space)) {
    if (k === '_') {
      classes.push(`${side}${space[k]}`);
    } else {
      classes.push(`${side}${space[k]}${k}`);
    }
  }
  return style(...classes);
}
