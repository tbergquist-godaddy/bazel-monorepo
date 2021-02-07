// @flow

import { type Node } from 'react';
import { graphql, useFragment } from 'react-relay/hooks';

import DayItem from './day';
import type { dayList_days$key as Days } from './__generated__/dayList_days.graphql';

type Props = {
  +days: ?Days,
};

export default function DayList({ days }: Props): Node {
  const data = useFragment(
    graphql`
      fragment dayList_days on DayEdge @relay(plural: true) {
        node {
          id
          ...day_day
        }
      }
    `,
    days,
  );
  if (data == null) {
    return null;
  }
  return data.map((day) => <DayItem key={day.node?.id} day={day.node} />);
}
