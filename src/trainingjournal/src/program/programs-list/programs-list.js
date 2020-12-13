// @flow

import type { Node } from 'react';
import { create } from '@adeira/sx';

type Props = {
  +programs: $ReadOnlyArray<{
    +id: number,
    +name: string,
  }>,
};

export default function ProgramsList({ programs }: Props): Node {
  return (
    <div>
      {programs.map((program) => (
        <div className={styles('listItem')} key={program.id}>
          {program.name}
        </div>
      ))}
    </div>
  );
}

const styles = create({
  listItem: {
    'padding': 'var(--space-large)',
    ':not(:last-of-type)': {
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'var(--color-gray-light)',
    },
  },
});
