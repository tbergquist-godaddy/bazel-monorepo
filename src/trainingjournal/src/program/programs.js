// @flow

import { type Node, useState } from 'react';
import { useQuery } from 'react-query';
import { Heading, Box } from '@tbergq/components';
import fbt from 'fbt';
import { Helmet } from 'react-helmet';

import { FETCH_PROGRAMS_KEY, fetchPrograms } from './api/fetch-programs';
import ProgramsList from './programs-list/programs-list';
import useIsLoggedIn from '../services/use-is-logged-in';
import AddButton from './components/add-button';
import AddProgram from './add-program/add-program';
import BackButton from '../components/back-button';

export default function Programs(): Node {
  const [showAddProgram, setShowAddProgram] = useState(false);
  useIsLoggedIn();
  const { data } = useQuery(FETCH_PROGRAMS_KEY, fetchPrograms, {
    suspense: true,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <Helmet>
        <title>Trainingjournal | programs</title>
      </Helmet>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Heading level="h1">
          <fbt desc="programs heading">Programs</fbt>
        </Heading>
        <AddButton onClick={() => setShowAddProgram(true)} />
      </Box>
      <ProgramsList programs={data} />

      <AddProgram isVisible={showAddProgram} onClose={() => setShowAddProgram(false)} />
      <Box marginTop="normal">
        <BackButton to="/home" />
      </Box>
    </>
  );
}
