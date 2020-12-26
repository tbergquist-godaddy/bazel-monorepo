// @flow

import { type Node } from 'react';

import DayItem from './day';
import type { Day } from '../types';

type Props = {
  +days: $ReadOnlyArray<Day>,
  +programId: string,
};

export default function DayList({ days, programId }: Props): Node {
  return days.map((day) => <DayItem programId={programId} key={day.id} day={day} />);
}
