// @flow

import { type Node } from 'react';
import { Heading, Box } from '@tbergq/components';
import { create } from '@adeira/sx';

import DayList from '../day/day-list';
import type { Week } from '../types';
import './week-list.css';
import DeleteWeek from './delete-week/delete-week';
import AddDay from './add-day';

type Props = {
  +week: Week,
};

export default function WeekList({ week }: Props): Node {
  return (
    <div id={`week-${week.id}`} className={styles('week')}>
      <Box justifyContent="space-between" alignItems="center" display="flex" marginBottom="normal">
        <Heading level="h2" as="h4">
          {week.name}
        </Heading>
        <Box display="flex">
          <Box marginRight="small">
            <DeleteWeek weekName={week.name} programId={week.program.toString()} weekId={week.id} />
          </Box>
          <Box>
            <AddDay
              programId={week.program.toString()}
              weekId={week.id}
              dayLength={week.days.length}
            />
          </Box>
        </Box>
      </Box>
      <div className={styles('grid')}>
        <DayList programId={week.program.toString()} days={week.days} />
      </div>
    </div>
  );
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
