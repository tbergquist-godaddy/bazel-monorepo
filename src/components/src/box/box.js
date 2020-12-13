// @flow

import type { Node } from 'react';
import { create } from '@adeira/sx';

type AlignItems = 'center';
type JustifyContent = 'space-between';

type Props = {
  +children: Node,
  +flex?: boolean,
  +alignItems?: AlignItems,
  +justifyContent?: JustifyContent,
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
    default:
      return null;
  }
};

export default function Box({ children, flex = false, alignItems, justifyContent }: Props): Node {
  return (
    <div
      className={styles(
        flex && 'flex',
        getAlignItems(alignItems),
        getJustifyContent(justifyContent),
      )}
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
});
