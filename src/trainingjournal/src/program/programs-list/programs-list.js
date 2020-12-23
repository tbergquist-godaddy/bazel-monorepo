// @flow

import type { Node } from 'react';
import { Link } from '@tbergq/router';
import { LinkList } from '@tbergq/components';

type Props = {
  +programs: $ReadOnlyArray<{
    +id: number,
    +name: string,
  }>,
};

export default function ProgramsList({ programs }: Props): Node {
  return (
    <LinkList
      items={programs}
      renderItem={(className, program) => (
        <Link className={className} to={`/programs/${program.id}`}>
          {program.name}
        </Link>
      )}
    />
  );
}
