/* eslint-disable sx/valid-usage */
// @flow

import { create } from '@adeira/sx';

import breakpoints, { breakpointsMap } from '../../breakpoints';
import type { MediaObjectOr, CSSSides } from './types';

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

const sides: $ReadOnlyArray<CSSSides> = ['top', 'right', 'bottom', 'left'];
const sizes: $ReadOnlyArray<SpacingEnum> = ['xs', 'small', 'normal', 'l', 'xl', 'xxl', 'none'];
const spacings = ['margin', 'padding'];

const spacingConfig = {};

const capitalizeFirst = (word: string): string => {
  return `${word.charAt(0).toUpperCase()}${word.substring(1)}`;
};

for (const space of spacings) {
  spacingConfig[space] = {};
  for (const bp of breakpointsMap) {
    for (const side of sides) {
      for (const size of sizes) {
        const styleObjectKey = `${side}${size}${bp}`;
        const styleObjectValue = { [`${space}${capitalizeFirst(side)}`]: styleKeys[size] };
        if (bp === '') {
          spacingConfig[space][styleObjectKey] = styleObjectValue;
        } else {
          spacingConfig[space][styleObjectKey] = {
            [breakpoints[bp]]: styleObjectValue,
          };
        }
      }
    }
  }
}

const margin = create(spacingConfig.margin);
const padding = create(spacingConfig.padding);

export function getMargin(space: ?Spacing, side: CSSSides): ?string {
  return getSpace(margin, space, side);
}

export function getPadding(space: ?Spacing, side: CSSSides): ?string {
  return getSpace(padding, space, side);
}

function getSpace(style: $FlowFixMe, space: ?Spacing, side: CSSSides): ?string {
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
