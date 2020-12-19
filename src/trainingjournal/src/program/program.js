// @flow

import { type Node } from 'react';
import { useQuery } from 'react-query';
import { Heading } from '@tbergq/components';

import { FETCH_PROGRAM_KEY, fetchProgram } from './api/fetch-programs';
import WeekList from './week/week-list';

type Props = {
  +routeData: {
    +params: {
      +id: string,
    },
  },
};

export default function Program({ routeData }: Props): Node {
  const id = routeData.params.id;
  const { data } = useQuery([FETCH_PROGRAM_KEY, id], () => fetchProgram(id), { suspense: true });
  return (
    <div>
      <Heading level="h1">{data.name}</Heading>
      <WeekList weeks={data.weeks} />
    </div>
  );
}
