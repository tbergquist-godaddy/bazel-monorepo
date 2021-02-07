// @flow

import { type Node } from 'react';
import { Button, useShowToast } from '@tbergq/components';
import { useNavigate, useRouteData } from '@tbergq/router';
import { fbt } from 'fbt';
import { useMutation, graphql } from 'react-relay/hooks';

import type { addDayMutation } from './__generated__/addDayMutation.graphql';

type Props = {
  +weekId: string,
  +dayLength: number,
  +connectionId: ?string,
};

export default function AddDay({ weekId, dayLength, connectionId }: Props): Node {
  const { params, url } = useRouteData();
  const programId = params.id;
  const showToast = useShowToast();
  const navigate = useNavigate();

  const [mutate, isLoading] = useMutation<addDayMutation>(graphql`
    mutation addDayMutation($day: CreateDayInput!, $connections: [ID!]!) {
      createDay(day: $day) {
        __typename
        ... on CreateDay {
          dayEdge @appendEdge(connections: $connections) {
            node {
              id
              name
            }
          }
        }
      }
    }
  `);

  const addDay = () => {
    mutate({
      variables: {
        day: { name: `Day ${dayLength + 1}`, programId, weekId },
        connections: [connectionId ?? ''],
      },
      onCompleted: (res, error) => {
        if (res.createDay?.__typename !== 'CreateDay' || error) {
          showToast({
            text: fbt('Failed to create day', 'create day error message'),
            type: 'danger',
          });
        } else {
          const newDayId = res.createDay.dayEdge?.node?.id;
          if (newDayId != null) {
            navigate(`${url}/day/${newDayId}/`);
          }
        }
      },
    });
  };

  return (
    <Button isLoading={isLoading} onClick={addDay} size="small">
      <fbt desc="Add day button">Add day</fbt>
    </Button>
  );
}
