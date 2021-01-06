// @flow

import type { Node } from 'react';

import getDisplayStyles, { type Display } from './styles/display';
import { getMargin, getPadding, type Spacing } from './styles/spacing';
import ellipsisStyles from '../utilities/ellipsis.module.css';
import flexStyles from '../utilities/flex.module.css';
import overflowStyles from '../utilities/overflow.module.css';
import textAlignStyles from '../utilities/text-align.module.css';

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
      return flexStyles['u-align-center'];
    default:
      return null;
  }
};

const getJustifyContent = (justifyContent: ?JustifyContent) => {
  switch (justifyContent) {
    case 'space-between':
      return flexStyles['u-space-between'];
    case 'flex-end':
      return flexStyles['u-justify-flex-end'];
    default:
      return null;
  }
};

const getFlexValue = (key: 'grow' | 'shrink') => (flexValue: ?FlexValues): $FlowFixMe => {
  if (flexValue == null) {
    return false;
  }

  return flexStyles[`u-flex-${key}-${flexValue}`];
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
        getJustifyContent(justifyContent),
        getAlignItems(alignItems),
        ellipsisContainer && ellipsisStyles['u-ellipsis-container'],
        getFlexValue('grow')(flexGrow),
        getFlexValue('shrink')(flexShrink),
        textAlign && textAlignStyles['u-text-align-right'],
        overflow && overflowStyles['u-overflow-hidden'],
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
