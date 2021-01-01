// @flow

import { type Node } from 'react';
import { Button } from '@tbergq/components';
import { useNavigate } from '@tbergq/router';
import { fbt } from 'fbt';

type Props = {
  +to: string,
  +fullWidth?: 'all' | 'mediumMobile',
};

export default function BackButton({ to, ...rest }: Props): Node {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(to);
  };
  return (
    <Button {...rest} onClick={onClick} variant="white">
      <fbt desc="Back button text">Back</fbt>
    </Button>
  );
}
