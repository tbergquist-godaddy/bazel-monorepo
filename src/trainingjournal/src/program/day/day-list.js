// @flow

import { type Node } from 'react';

import DayItem from './day';
import type { Day } from '../types';

type Props = {
  +days: $ReadOnlyArray<Day>,
};

export default function DayList({ days }: Props): Node {
  return days.map((day) => <DayItem key={day.id} day={day} />);
}
