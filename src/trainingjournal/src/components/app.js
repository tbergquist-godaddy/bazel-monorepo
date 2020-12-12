// @flow

import { type Node, useEffect } from 'react';
import { RouterRenderer, RoutingContext, createRouter } from '@tbergq/router';
import { Spinner, Navbar, Toast } from '@tbergq/components';
import { createHashHistory } from 'history';
import { init, IntlVariations } from 'fbt';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import Routes from './router';
import getLanguage from './get-language';
import translations from '../../translatedFbts.json';

const router = createRouter(Routes, createHashHistory());
const queryCache = new QueryCache();

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
    <ReactQueryCacheProvider queryCache={queryCache}>
      <RoutingContext.Provider value={router.context}>
        <RecoilRoot>
          <Navbar brand="Trainingjournal" />
          <main>
            <RouterRenderer loader={<Spinner />} />
            <Toast />
          </main>
        </RecoilRoot>
      </RoutingContext.Provider>
    </ReactQueryCacheProvider>
  );
}
