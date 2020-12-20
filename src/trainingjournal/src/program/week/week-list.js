// @flow

import { type Node } from 'react';
import { Heading } from '@tbergq/components';
import { create } from '@adeira/sx';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import DayList from '../day/day-list';
import type { Week } from '../types';
import './week-list.css';

type Props = {
  +weeks: $ReadOnlyArray<Week>,
};

export default function WeekList({ weeks }: Props): Node {
  return (
    <TransitionGroup className="Program__week-list">
      {weeks.map((week) => (
        <CSSTransition key={week.id} timeout={500} classNames="item">
          <div id={`week-${week.id}`} className={styles('week')}>
            <Heading level="h2" as="h4">
              {week.name}
            </Heading>
            <div className={styles('grid')}>
              <DayList days={week.days} />
            </div>
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
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
