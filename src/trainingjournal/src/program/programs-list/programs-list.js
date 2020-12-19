// @flow

import type { Node } from 'react';
import { create } from '@adeira/sx';
import { Link } from '@tbergq/router';

type Props = {
  +programs: $ReadOnlyArray<{
    +id: number,
    +name: string,
  }>,
};

export default function ProgramsList({ programs }: Props): Node {
  return (
    <ul className={styles('list')}>
      {programs.map((program) => (
        <li className={styles('listItem')} key={program.id}>
          <Link to={`/programs/${program.id}`}>{program.name}</Link>
        </li>
      ))}
    </ul>
  );
}

const styles = create({
  list: {
    listStyle: 'none',
  },
  listItem: {
    'padding': 'var(--space-large)',
    ':not(:last-of-type)': {
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'var(--color-gray-light)',
    },
  },
});
