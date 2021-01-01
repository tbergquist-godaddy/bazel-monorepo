// @flow

import type { Node } from 'react';
import { create } from '@adeira/sx';

import getDisplayStyles, { type Display } from './styles/display';
import { getMargin, getPadding, type Spacing } from './styles/spacing';

type AlignItems = 'center';
type JustifyContent = 'space-between' | 'flex-end';
type FlexValues = '0' | '1';
type TextAlign = 'right';

type Props = {
  +'children': Node,
  +'alignItems'?: AlignItems,
  +'justifyContent'?: JustifyContent,
  +'marginRight'?: Spacing,
  +'marginLeft'?: Spacing,
  +'marginTop'?: Spacing,
  +'marginBottom'?: Spacing,
  +'paddingBottom'?: Spacing,
  +'paddingRight'?: Spacing,
  +'paddingLeft'?: Spacing,
  +'paddingTop'?: Spacing,
  +'className'?: string,
  +'ellipsisContainer'?: boolean,
  +'flexGrow'?: FlexValues,
  +'flexShrink'?: FlexValues,
  +'title'?: string,
  +'textAlign'?: TextAlign,
  +'overflow'?: 'hidden',
  +'display'?: Display,
  +'data-testid'?: string,
};

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
  alignItems,
  justifyContent,
  marginRight,
  marginBottom,
  marginTop,
  marginLeft,
  className,
  paddingTop,
  paddingRight,
  paddingLeft,
  paddingBottom,
  ellipsisContainer = false,
  flexGrow,
  flexShrink,
  title,
  textAlign,
  overflow,
  display,
  ...rest
}: Props): Node {
  return (
    <div
      {...rest}
      title={title} // TODO: Replace with tooltip
      className={[
        'Box',
        styles(
          getAlignItems(alignItems),
          getJustifyContent(justifyContent),
          ellipsisContainer && 'ellipsisContainer',
          getFlexValue('Grow')(flexGrow),
          getFlexValue('Shrink')(flexShrink),
        ),
        taStyles(textAlign),
        overflowStyles(overflow),
        getDisplayStyles(display),
        getMargin(marginTop, 'top'),
        getMargin(marginRight, 'right'),
        getMargin(marginBottom, 'bottom'),
        getMargin(marginLeft, 'left'),
        getPadding(paddingTop, 'top'),
        getPadding(paddingRight, 'right'),
        getPadding(paddingBottom, 'bottom'),
        getPadding(paddingLeft, 'left'),
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
}

const overflowStyles = create({
  hidden: {
    overflow: 'hidden',
  },
});
const taStyles = create({
  right: {
    textAlign: 'right',
  },
});
const styles = create({
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
