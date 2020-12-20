// @flow

import { type Node } from 'react';
import { Button } from '@tbergq/components';
import { useNavigate } from '@tbergq/router';
import { fbt } from 'fbt';

type Props = {
  +to: string,
};

export default function BackButton({ to }: Props): Node {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(to);
  };
  return (
    <Button onClick={onClick} variant="white">
      <fbt desc="Back button text">Back</fbt>
    </Button>
  );
}
