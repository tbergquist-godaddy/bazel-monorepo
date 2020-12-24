// @flow

import type { Node } from 'react';
import { create } from '@adeira/sx';

type AlignItems = 'center';
type JustifyContent = 'space-between' | 'flex-end';
type Spacing = 'xs' | 's' | 'normal' | 'l' | 'xl' | 'xxl';

type Props = {
  +children: Node,
  +flex?: boolean,
  +alignItems?: AlignItems,
  +justifyContent?: JustifyContent,
  +marginRight?: Spacing,
  +marginTop?: Spacing,
  +marginBottom?: Spacing,
  +paddingBottom?: Spacing,
  +className?: string,
};

type SpacingKey = 'mr' | 'mt' | 'mb' | 'pb';

const getSpacing = (space: ?Spacing, key: SpacingKey) => {
  switch (space) {
    case 'normal':
      return `${key}Normal`;
    default:
      return false;
  }
};

const getMr = (space: ?Spacing): $FlowFixMe => getSpacing(space, 'mr');
const getMt = (space: ?Spacing): $FlowFixMe => getSpacing(space, 'mt');
const getMb = (space: ?Spacing): $FlowFixMe => getSpacing(space, 'mb');
const getPb = (space: ?Spacing): $FlowFixMe => getSpacing(space, 'pb');

const getAlignItems = (alignItems: ?AlignItems) => {
  switch (alignItems) {
    case 'center':
      return 'alignItemsCenter';
    default:
      return null;
  }
};

const getJustifyContent = (justifyContent: ?JustifyContent) => {
  switch (justifyContent) {
    case 'space-between':
      return 'justifyContentSB';
    case 'flex-end':
      return 'justifyContentFE';
    default:
      return null;
  }
};

export default function Box({
  children,
  flex = false,
  alignItems,
  justifyContent,
  marginRight,
  marginBottom,
  marginTop,
  className,
  paddingBottom,
}: Props): Node {
  return (
    <div
      className={`${styles(
        flex && 'flex',
        getAlignItems(alignItems),
        getJustifyContent(justifyContent),
        getMr(marginRight),
        getMt(marginTop),
        getMb(marginBottom),
        getPb(paddingBottom),
      )} ${className ?? ''}`}
    >
      {children}
    </div>
  );
}

const styles = create({
  flex: {
    display: 'flex',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  justifyContentSB: {
    justifyContent: 'space-between',
  },
  justifyContentFE: {
    justifyContent: 'flex-end',
  },
  mrNormal: {
    marginRight: 'var(--space-normal)',
  },
  mtNormal: {
    marginTop: 'var(--space-normal)',
  },
  mbNormal: {
    marginBottom: 'var(--space-normal)',
  },
  pbNormal: {
    paddingBottom: 'var(--space-normal)',
  },
});
