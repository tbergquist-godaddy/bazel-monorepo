// @flow

import { type Node } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import type { Week as WeekType } from '../types';
import './week-list.css';
import Week from './week';

type Props = {
  +weeks: $ReadOnlyArray<WeekType>,
};

export default function WeekList({ weeks }: Props): Node {
  return (
    <TransitionGroup className="Program__week-list">
      {weeks.map((week) => (
        <CSSTransition key={week.id} timeout={500} classNames="Program__week-list--item">
          <Week week={week} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
