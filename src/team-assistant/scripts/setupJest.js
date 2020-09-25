// @flow

import { init, IntlVariations } from 'fbt';
import { configure } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import translations from '../translatedFbts.json';

configure({ testIdAttribute: 'data-test' });

init({
  translations,
  hooks: {
    getViewerContext: () => {
      return {
        locale: 'en_US',
        GENDER: IntlVariations.GENDER_UNKNOWN,
      };
    },
  },
});
