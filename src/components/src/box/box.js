// @flow

import type { Node } from 'react';
import { create } from '@adeira/sx';

type AlignItems = 'center';
type JustifyContent = 'space-between' | 'flex-end';
type Spacing = 'xs' | 'small' | 'normal' | 'l' | 'xl' | 'xxl';
type FlexValues = '0' | '1';

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
  +ellipsisContainer?: boolean,
  +flexGrow?: FlexValues,
  +flexShrink?: FlexValues,
  +title?: string,
};

type SpacingKey = 'mr' | 'mt' | 'mb' | 'pb';

const getSpacing = (space: ?Spacing, key: SpacingKey) => {
  switch (space) {
    case 'normal':
      return `${key}Normal`;
    case 'small':
      return `${key}Small`;
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

const getFlexValue = (key: 'Grow' | 'Shrink') => (flexValue: ?FlexValues): $FlowFixMe => {
  if (flexValue == null) {
    return false;
  }

  return `flex${key}${flexValue}`;
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
  ellipsisContainer = false,
  flexGrow,
  flexShrink,
  title,
}: Props): Node {
  return (
    <div
      title={title} // TODO: Replace with tooltip
      className={`Box ${styles(
        flex && 'flex',
        getAlignItems(alignItems),
        getJustifyContent(justifyContent),
        getMr(marginRight),
        getMt(marginTop),
        getMb(marginBottom),
        getPb(paddingBottom),
        ellipsisContainer && 'ellipsisContainer',
        getFlexValue('Grow')(flexGrow),
        getFlexValue('Shrink')(flexShrink),
      )}${className != null ? ` ${className}` : ''}`}
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
  mrSmall: {
    marginRight: 'var(--space-small)',
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
  ellipsisContainer: {
    overflowX: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  flexGrow0: {
    flexGrow: 0,
  },
  flexGrow1: {
    flexGrow: 1,
  },
  flexShrink0: {
    flexShrink: 0,
  },
  flexShrink1: {
    flexShrink: 1,
  },
});
