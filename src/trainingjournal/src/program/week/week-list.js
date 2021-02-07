// @flow

import { type Node } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { graphql, useFragment } from 'react-relay/hooks';
import { Box } from '@tbergq/components';

import './week-list.css';
import Week from './week';
import type { weekList_weeks$key as Weeks } from './__generated__/weekList_weeks.graphql';
import AddWeek from './add-week';
import BackButton from '../../components/back-button';
import DeleteProgram from '../delete-program';

type Props = {
  +weeks: ?Weeks,
};

export default function WeekList({ weeks }: Props): Node {
  const data = useFragment(
    graphql`
      fragment weekList_weeks on Program {
        ...addWeek_program
        ...deleteProgram_program
        weeks(first: 50) @connection(key: "WeekList_weeks") {
          __id
          edges {
            node {
              id
              ...week_week
            }
          }
        }
      }
    `,
    weeks,
  );
  const edges = data?.weeks?.edges ?? [];
  return (
    <>
      <TransitionGroup className="Program__week-list">
        {edges.map((week) => (
          <CSSTransition key={week?.node?.id} timeout={500} classNames="Program__week-list--item">
            <Week connectionId={data?.weeks?.__id} week={week?.node} />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <Box display={{ _: 'block', mediumMobile: 'flex' }} marginTop="normal">
        <Box
          marginRight={{ _: 'none', mediumMobile: 'normal' }}
          marginBottom={{ _: 'normal', mediumMobile: 'none' }}
        >
          <BackButton fullWidth="mediumMobile" to="/programs" />
        </Box>
        <Box
          marginRight={{ _: 'none', mediumMobile: 'normal' }}
          marginBottom={{ _: 'normal', mediumMobile: 'none' }}
        >
          <AddWeek weekCount={edges.length} program={data} connectionId={data?.weeks?.__id} />
        </Box>
        <DeleteProgram program={data} connectionId={data?.weeks?.__id} />
      </Box>
    </>
  );
}
