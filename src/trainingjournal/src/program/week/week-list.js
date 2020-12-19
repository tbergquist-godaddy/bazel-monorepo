// @flow

import { type Node } from 'react';
import { Heading } from '@tbergq/components';
import { create } from '@adeira/sx';

import DayList, { type Day } from '../day/day-list';

type Week = {
  +id: number,
  +name: string,
  +days: $ReadOnlyArray<Day>,
};

type Props = {
  +weeks: $ReadOnlyArray<Week>,
};

export default function WeekList({ weeks }: Props): Node {
  return weeks.map((week) => (
    <div id={`week-${week.id}`} className={styles('week')} key={week.id}>
      <Heading level="h2" as="h4">
        {week.name}
      </Heading>
      <div className={styles('grid')}>
        <DayList days={week.days} />
      </div>
    </div>
  ));
}

const styles = create({
  week: {
    'padding': 'var(--space-large)',
    ':not(:last-of-type)': {
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'var(--color-gray-light)',
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: 'var(--space-large)',
  },
});
