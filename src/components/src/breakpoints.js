// @flow

export const breakpoints = {
  mediumMobile: 414,
  largeMobile: 576,
  tablet: 768,
  desktop: 992,
  largeDesktop: 1200,
};
const mediumMobile = `@media only screen and (min-width: ${breakpoints.mediumMobile}px)`;
const largeMobile = `@media only screen and (min-width: ${breakpoints.largeMobile}px)`;
const tablet = `@media only screen and (min-width: ${breakpoints.tablet}px)`;
const desktop = `@media only screen and (min-width: ${breakpoints.desktop}px)`;
const largeDesktop = `@media only screen and (min-width: ${breakpoints.largeDesktop}px)`;

export default {
  mediumMobile,
  largeMobile,
  tablet,
  desktop,
  largeDesktop,
};
