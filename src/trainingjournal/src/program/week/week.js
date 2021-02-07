// @flow

import { type Node } from 'react';
import { Heading, Box, borderUnderlineStyles } from '@tbergq/components';
import { graphql, useFragment } from 'react-relay/hooks';

import './week-list.css';
import './week.css';
import type { week_week$key as WeekType } from './__generated__/week_week.graphql';
import DeleteWeek from './delete-week/delete-week';

type Props = {
  +week: ?WeekType,
  +connectionId: ?string,
};

export default function Week({ week, connectionId }: Props): Node {
  const data = useFragment(
    graphql`
      fragment week_week on Week {
        id
        name
        ...deleteWeek_week
      }
    `,
    week,
  );
  return (
    <div
      id={`week-${data?.id ?? ''}`}
      className={`Week__container ${borderUnderlineStyles['u-border-bottom']}`}
    >
      <Box justifyContent="space-between" alignItems="center" display="flex" marginBottom="normal">
        <Heading level="h2" as="h4">
          {data?.name ?? ''}
        </Heading>
        <Box display="flex">
          <Box marginRight="small">
            <DeleteWeek connectionId={connectionId} week={data} />
          </Box>
          {/* <Box>
            <AddDay
              programId={week.program.toString()}
              weekId={week.id}
              dayLength={week.days.length}
            />
          </Box> */}
        </Box>
      </Box>
      {/*  <div className={`${displayStyles['u-display-grid']} Week__day-list-container`}>
        <DayList programId={week.program.toString()} days={week.days} />
      </div> */}
    </div>
  );
}
