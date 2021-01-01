// @flow

import { render, screen } from '@testing-library/react';

import Box from '../box';

describe('Box / margin', () => {
  it('has margin normal classes', () => {
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

    expect(screen.getByTestId('box')).toHaveClass(
      'Box u-margin-top-normal u-margin-right-normal u-margin-bottom-normal u-margin-left-normal',
    );
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

    expect(screen.getByTestId('box')).toHaveClass(
      'Box u-margin-right-xs u-margin-right-small-mediumMobile u-margin-right-normal-tablet u-margin-right-l-desktop u-margin-right-xl-largeDesktop',
    );
  });
});

describe('Box / display', () => {
  it('works with display', () => {
    render(
      <Box display="flex" data-testid="box">
        test
      </Box>,
    );
    expect(screen.getByTestId('box')).toHaveClass('Box u-display-flex');
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
    expect(screen.getByTestId('box')).toHaveClass(
      'Box u-display-flex u-display-block-mediumMobile u-display-inline-block-tablet u-display-inline-desktop',
    );
  });
});
