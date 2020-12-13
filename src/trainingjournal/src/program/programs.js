// @flow

import type { Node } from 'react';
import { useQuery } from 'react-query';
import { Heading } from '@tbergq/components';
import fbt from 'fbt';

import { FETCH_PROGRAMS_KEY, fetchPrograms } from './api/fetch-programs';
import ProgramsList from './programs-list/programs-list';

export default function Programs(): Node {
  const { data } = useQuery(FETCH_PROGRAMS_KEY, fetchPrograms, {
    suspense: true,
    refetchOnWindowFocus: false,
  });
  return (
    <>
      <Heading level="h1">
        <fbt desc="programs heading">Programs</fbt>
      </Heading>
      <ProgramsList programs={data} />
    </>
  );
}
