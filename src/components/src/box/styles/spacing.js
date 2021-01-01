// @flow

import type { MediaObjectOr, CSSSides } from './types';
import '../../utilities/spacing.css';

type SpacingEnum = 'xs' | 'small' | 'normal' | 'l' | 'xl' | 'xxl' | 'none';
export type Spacing = MediaObjectOr<SpacingEnum>;

export function getMargin(space: ?Spacing, side: CSSSides): ?string {
  return getSpace('margin', space, side);
}

export function getPadding(space: ?Spacing, side: CSSSides): ?string {
  return getSpace('padding', space, side);
}

function getSpace(style: 'margin' | 'padding', space: ?Spacing, side: CSSSides): ?string {
  if (space == null || space === 'none') {
    return null;
  }
  if (typeof space === 'string') {
    return `u-${style}-${side}-${space}`;
  }
  const classes = [];
  for (const key of Object.keys(space)) {
    if (key === 'none') {
      continue;
    }
    if (key === '_') {
      classes.push(`u-${style}-${side}-${space[key]}`);
    } else {
      classes.push(`u-${style}-${side}-${space[key]}-${key}`);
    }
  }
  return classes.join(' ');
}
