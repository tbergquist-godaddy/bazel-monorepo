// @flow

import { type Node } from 'react';

import DayItem, { type DayType } from './day';

export type Day = DayType;

type Props = {
  +days: $ReadOnlyArray<Day>,
};

export default function DayList({ days }: Props): Node {
  return days.map((day) => <DayItem key={day.id} day={day} />);
}
