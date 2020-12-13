// @flow

import { init, IntlVariations } from 'fbt';

import server from '../mocks/server';
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

beforeAll(() => {
  return server.listen();
});

afterEach(() => server.resetHandlers());

afterAll(() => {
  return server.close();
});
