// @flow

import type { Node } from 'react';
import { useFragment, graphql } from 'react-relay/hooks';
import { create } from '@adeira/sx';

import type { team_team$key as TeamType } from './__generated__/team_team.graphql';

type Props = {
  +team: ?TeamType,
};
export default function Team({ team }: Props): Node {
  const ref = useFragment(
    graphql`
      fragment team_team on Team {
        name
      }
    `,
    team,
  );

  return <div className={styles('row')}>{ref?.name}</div>;
}

const styles = create({
  row: {
    'padding': 'var(--space-normal)',
    ':not(:last-of-type)': {
      borderBottomWidth: '1px',
      borderBottomColor: 'var(--color-gray-light)',
      borderBottomStyle: 'solid',
    },
  },
});
