// @flow

import type { Node } from 'react';
import { IconButton } from '@tbergq/components';
import { MdAdd } from 'react-icons/md';
import { fbt } from 'fbt';

type Props = {
  +onClick: () => void,
};

export default function AddButton({ onClick }: Props): Node {
  return (
    <IconButton onClick={onClick} aria-label={fbt('Add program', 'Add program aria label')}>
      <MdAdd />
    </IconButton>
  );
}
