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
          <Link className={styles('link')} to={`/programs/${program.id}`}>
            {program.name}
          </Link>
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
    ':not(:last-of-type)': {
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'var(--color-gray-light)',
    },
  },
  link: {
    'transition': 'background-color var(--transition-duration-normal)',
    ':hover': {
      backgroundColor: 'var(--color-gray-light)',
      textDecoration: 'none',
    },
    ':focus': {
      backgroundColor: 'var(--color-gray-light)',
      textDecoration: 'none',
    },
    'backgroundColor': 'var(--color-white)',
    'display': 'block',
    'padding': 'var(--space-large)',
  },
});
