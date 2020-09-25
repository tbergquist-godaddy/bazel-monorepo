// @flow

import { init, IntlVariations } from 'fbt';

import translations from '../translatedFbts.json';

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
