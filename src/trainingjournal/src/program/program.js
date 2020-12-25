// @flow

import { type Node } from 'react';
import { useQuery } from 'react-query';
import { Heading, Box } from '@tbergq/components';
import { Helmet } from 'react-helmet';

import { FETCH_PROGRAM_KEY, fetchProgram } from './api/fetch-programs';
import WeekList from './week/week-list';
import AddWeek from './week/add-week';
import BackButton from '../components/back-button';
import type { Program as ProgramResponse } from './types';

type Props = {
  +routeData: {
    +params: {
      +id: string,
    },
  },
};

export default function Program({ routeData }: Props): Node {
  const id = routeData.params.id;
  const { data } = useQuery<ProgramResponse>([FETCH_PROGRAM_KEY, id], () => fetchProgram(id), {
    suspense: true,
  });

  return (
    <>
      <Helmet>
        <title>Trainingjournal | {data.name}</title>
      </Helmet>
      <Heading level="h1">{data.name}</Heading>
      <WeekList weeks={data.weeks} />
      <Box flex={true} marginTop="normal">
        <Box marginRight="normal">
          <BackButton to="/programs" />
        </Box>
        <AddWeek programId={id} weekCount={data.weeks.length} />
      </Box>
    </>
  );
}
