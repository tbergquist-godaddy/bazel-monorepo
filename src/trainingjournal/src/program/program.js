// @flow

import { type Node } from 'react';
import { Heading, Box } from '@tbergq/components';
import { Helmet } from 'react-helmet';

import { useProgram } from './api/fetch-programs';
import WeekList from './week/week-list';
import AddWeek from './week/add-week';
import BackButton from '../components/back-button';
import type { Program as ProgramResponse } from './types';
import DeleteProgram from './delete-program';

type Props = {
  +routeData: {
    +params: {
      +id: string,
    },
  },
};

export default function Program({ routeData }: Props): Node {
  const id = routeData.params.id;
  const { data } = useProgram<ProgramResponse>(id, {
    suspense: true,
  });

  return (
    <>
      <Helmet>
        <title>Trainingjournal | {data.name}</title>
      </Helmet>
      <Heading level="h1">{data.name}</Heading>
      <WeekList weeks={data.weeks} />
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
          <AddWeek programId={id} weekCount={data.weeks.length} />
        </Box>
        <DeleteProgram programName={data.name} programId={id} />
      </Box>
    </>
  );
}
