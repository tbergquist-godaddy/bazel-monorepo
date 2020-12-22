// @flow

import { type Node } from 'react';
import { Heading, Button, Box, useShowToast } from '@tbergq/components';
import { create } from '@adeira/sx';
import { useNavigate, useHistory } from '@tbergq/router';
import { fbt } from 'fbt';
import { useMutation } from 'react-query';

import DayList from '../day/day-list';
import type { Week } from '../types';
import './week-list.css';
import { createDay } from '../api/fetch-days';

type Props = {
  +week: Week,
};

export default function WeekList({ week }: Props): Node {
  const { location } = useHistory();
  const showToast = useShowToast();
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(createDay, {
    onError: () => {
      showToast({ text: fbt('Failed to create day', 'create day error message'), type: 'danger' });
    },
    onSuccess: () => {
      navigate(`${location.pathname}/day/${week.id}/`);
    },
  });

  const addDay = () => {
    mutate({ week: week.id, name: `Day ${week.days.length + 1}` });
  };

  return (
    <div id={`week-${week.id}`} className={styles('week')}>
      <Box justifyContent="space-between" alignItems="center" flex={true} marginBottom="normal">
        <Heading level="h2" as="h4">
          {week.name}
        </Heading>
        <div>
          <Button isLoading={isLoading} onClick={addDay} size="small">
            <fbt desc="Add day button">Add day</fbt>
          </Button>
        </div>
      </Box>
      <div className={styles('grid')}>
        <DayList days={week.days} />
      </div>
    </div>
  );
}

const styles = create({
  week: {
    'padding': 'var(--space-large)',
    ':not(:last-of-type)': {
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'var(--color-gray-light)',
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: 'var(--space-large)',
  },
});
