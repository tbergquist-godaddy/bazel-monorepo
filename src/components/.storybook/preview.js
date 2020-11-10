// @flow

import { breakpoints } from '../src/breakpoints';
import '../src/theme.css';

export const parameters = {
  viewport: {
    viewports: {
      smallMobile: {
        name: 'small mobile',
        styles: {
          height: '568px',
          width: '320px',
        },
        type: 'mobile',
      },
      mediumMobile: {
        name: 'medium mobile',
        styles: {
          height: '568px',
          width: (breakpoints.mediumMobile + 'px' /*:string */),
        },
        type: 'mobile',
      },
      largeMobile: {
        name: 'large mobile',
        styles: {
          height: '568px',
          width: (breakpoints.largeMobile + 'px' /*:string */),
        },
        type: 'mobile',
      },
      tablet: {
        name: 'tablet',
        styles: {
          height: '568px',
          width: (breakpoints.tablet + 'px' /*:string */),
        },
        type: 'tablet',
      },
      desktop: {
        name: 'desktop',
        styles: {
          height: '568px',
          width: (breakpoints.desktop + 'px' /*:string */),
        },
        type: 'desktop',
      },
      largeDesktop: {
        name: 'large desktop',
        styles: {
          height: '568px',
          width: (breakpoints.largeDesktop + 'px' /*:string */),
        },
        type: 'desktop',
      },
    },
  },
};
