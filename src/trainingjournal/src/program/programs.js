// @flow

import { type Node, useState } from 'react';
import { Heading, Box } from '@tbergq/components';
import fbt from 'fbt';
import { Helmet } from 'react-helmet';
import { graphql, usePreloadedQuery } from 'react-relay/hooks';
import type { GraphQLTaggedNode } from 'react-relay';

import ProgramsList from './programs-list/programs-list';
import AddButton from './components/add-button';
import BackButton from '../components/back-button';

export const query: GraphQLTaggedNode = graphql`
  query programsQuery {
    me {
      ...programsList_programs
    }
  }
`;

type Props = {
  prepared: {
    query: any,
  },
};

export default function Programs({ prepared }: Props): Node {
  const [showAddProgram, setShowAddProgram] = useState(false);
  const data = usePreloadedQuery(query, prepared.query);

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
      <ProgramsList
        programs={data.me}
        isVisible={showAddProgram}
        onClose={() => setShowAddProgram(false)}
      />

      <Box marginTop="normal">
        <BackButton to="/home" />
      </Box>
    </>
  );
}
