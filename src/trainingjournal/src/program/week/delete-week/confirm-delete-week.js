// @flow

import { type Node, useState, useEffect } from 'react';
import { Confirm } from '@tbergq/components';
import { fbt } from 'fbt';

type Props = {
  +onClose: () => void,
  +onConfirm: () => void,
  +weekName: string,
};

export default function ConfirmDeleteWeek({ weekName, ...rest }: Props): Node {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Confirm
      confirmActionText={fbt('Delete week', 'Delete week action button')}
      cancelActionText={fbt('Cancel', 'Cancel delete week action button')}
      title={fbt('Confirm delete week', 'Confirm delete week title')}
      confirmText={fbt(
        `Are you sure you want to delete ${fbt.param('weekName', weekName)}`,
        'Confirm delete week text',
      )}
      isVisible={isVisible}
      {...rest}
    />
  );
}
