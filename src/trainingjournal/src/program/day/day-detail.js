// @flow

import { type Node } from 'react';
import { Heading } from '@tbergq/components';

import BackButton from '../../components/back-button';
import { useFetchDay } from '../api/fetch-days';

type Props = {
  +routeData: {
    +params: {
      +programId: string,
      +dayId: string,
    },
  },
};

export default function DayDetail({ routeData }: Props): Node {
  const { dayId, programId } = routeData.params;
  const { data } = useFetchDay(dayId, { suspense: true });

  return (
    <div>
      <Heading level="h1">{data.name}</Heading>
      <BackButton to={`/programs/${programId}`} />
    </div>
  );
}
