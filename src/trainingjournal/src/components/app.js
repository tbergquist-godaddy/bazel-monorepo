// @flow

import { type Node, useEffect } from 'react';
import { RouterRenderer, RoutingContext, createRouter } from '@tbergq/router';
import { Spinner, Navbar, Toast, breakpoints } from '@tbergq/components';
import { createHashHistory } from 'history';
import { init, IntlVariations } from 'fbt';
import { ReactQueryCacheProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { create } from '@adeira/sx';

import Routes, { cache as queryCache } from './router';
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
    <ReactQueryCacheProvider queryCache={queryCache}>
      <RoutingContext.Provider value={router.context}>
        <RecoilRoot>
          <Navbar brand="Trainingjournal" />
          <main className={styles('container')}>
            <RouterRenderer loader={<Spinner />} />
            <Toast />
          </main>
        </RecoilRoot>
      </RoutingContext.Provider>
    </ReactQueryCacheProvider>
  );
}

const styles = create({
  container: {
    padding: 'var(--space-large)',
    margin: '0 auto',
    [breakpoints.tablet]: {
      width: '750px',
    },
    [breakpoints.desktop]: {
      width: '970px',
    },
    [breakpoints.largeDesktop]: {
      width: '1170px',
    },
  },
});
