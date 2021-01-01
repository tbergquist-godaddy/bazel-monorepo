// @flow

import { render, screen } from '@testing-library/react';

import Box from '../box';

describe('Box / margin', () => {
  it('has margin right normal', () => {
    render(
      <Box
        data-testid="box"
        marginRight="normal"
        marginLeft="normal"
        marginTop="normal"
        marginBottom="normal"
      >
        test
      </Box>,
    );

    expect(screen.getByTestId('box')).toHaveStyle('margin-top:var(--space-normal)');
    expect(screen.getByTestId('box')).toHaveStyle('margin-right:var(--space-normal)');
    expect(screen.getByTestId('box')).toHaveStyle('margin-bottom:var(--space-normal)');
    expect(screen.getByTestId('box')).toHaveStyle('margin-left:var(--space-normal)');
  });

  it('works with media query config object', () => {
    render(
      <Box
        data-testid="box"
        marginRight={{
          _: 'xs',
          mediumMobile: 'small',
          tablet: 'normal',
          desktop: 'l',
          largeDesktop: 'xl',
        }}
      >
        test
      </Box>,
    );

    expect(screen.getByTestId('box')).toHaveStyle('margin-right:var(--space-x-small)');
  });
});

describe('Box / display', () => {
  it('works with display', () => {
    render(
      <Box display="flex" data-testid="box">
        test
      </Box>,
    );
    expect(screen.getByTestId('box')).toHaveStyle('display:flex');
  });

  it('accepts media query config object', () => {
    render(
      <Box
        display={{ _: 'flex', mediumMobile: 'block', tablet: 'inline-block', desktop: 'inline' }}
        data-testid="box"
      >
        test
      </Box>,
    );
    expect(screen.getByTestId('box')).toHaveStyle('display:flex');
  });
});
