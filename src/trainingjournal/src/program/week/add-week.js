// @flow

import { type Node } from 'react';
import { Button, useShowToast } from '@tbergq/components';
import { fbt } from 'fbt';
import { graphql, useFragment, useMutation } from 'react-relay/hooks';

import type { addWeek_program$key as Program } from './__generated__/addWeek_program.graphql';
import type { addWeekMutation } from './__generated__/addWeekMutation.graphql';

type Props = {
  +program: ?Program,
  +weekCount: number,
  +connectionId: ?string,
};

export default function AddWeek({ program, weekCount, connectionId }: Props): Node {
  const data = useFragment(
    graphql`
      fragment addWeek_program on Program {
        id
      }
    `,
    program,
  );
  const [mutate, isLoading] = useMutation<addWeekMutation>(graphql`
    mutation addWeekMutation($name: String!, $programId: ID!, $connections: [ID!]!) {
      createWeek(name: $name, programId: $programId) {
        __typename
        ... on CreateWeek {
          weekEdge @appendEdge(connections: $connections) {
            node {
              id
              name
            }
          }
        }
      }
    }
  `);
  const showToast = useShowToast();

  const onClick = () => {
    mutate({
      variables: {
        connections: [connectionId ?? ''],
        name: `Week ${(weekCount + 1).toString()}`,
        programId: data?.id ?? '',
      },
      onCompleted: ({ createWeek }, error) => {
        if (error || createWeek?.__typename !== 'CreateWeek') {
          showToast({
            type: 'danger',
            text: fbt(
              'Failed to create a new week, please try again',
              'Failed to create week error message',
            ),
          });
        } else {
          showToast({
            text: fbt('Week was successfully created', 'Create week success toast message'),
          });
        }
      },
    });
  };
  return (
    <Button fullWidth="mediumMobile" isLoading={isLoading} onClick={onClick}>
      <fbt desc="Add week button">Add week</fbt>
    </Button>
  );
}
