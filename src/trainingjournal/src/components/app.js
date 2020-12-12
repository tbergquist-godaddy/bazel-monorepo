// @flow

import { type Node, useEffect } from 'react';
import { RouterRenderer, RoutingContext, createRouter } from '@tbergq/router';
import { Spinner, Navbar } from '@tbergq/components';
import { createHashHistory } from 'history';
import { init, IntlVariations } from 'fbt';

import Routes from './router';
import getLanguage from './get-language';
import translations from '../../translatedFbts.json';

const router = createRouter(Routes, createHashHistory());

export default function App(): Node {
  useEffect(() => {
    init({
      translations,
      hooks: {
        getViewerContext: () => {
          return {
            locale: getLanguage(),
            GENDER: IntlVariations.GENDER_UNKNOWN,
          };
        },
      },
    });
  }, []);
  return (
    <RoutingContext.Provider value={router.context}>
      <Navbar brand="Trainingjournal" />
      <main>
        <RouterRenderer loader={<Spinner />} />
      </main>
    </RoutingContext.Provider>
  );
}
