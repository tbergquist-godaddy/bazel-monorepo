// @flow

import { type Node, useEffect, lazy, Suspense } from 'react';
import { RouterRenderer, RoutingContext, createRouter } from '@tbergq/router';
import { Spinner, Toast, breakpoints } from '@tbergq/components';
import { createHashHistory } from 'history';
import { init, IntlVariations } from 'fbt';
import { QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { create } from '@adeira/sx';

import Routes, { queryClient } from './router';
import getLanguage from './get-language';
import translations from '../../translatedFbts.json';

const Navbar = lazy(() => import('./navbar'));
const router = createRouter(Routes, createHashHistory());
const ReactQueryDevtoolsPanel = lazy(() => import('./react-query-devtools'));

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
    <QueryClientProvider client={queryClient}>
      <RoutingContext.Provider value={router.context}>
        <RecoilRoot>
          <header className={styles('header')}>
            <Suspense fallback="">
              <Navbar />
            </Suspense>
          </header>
          <main className={styles('container')}>
            <RouterRenderer loader={<Spinner />} />
            <Toast />
            {__DEV__ && (
              <Suspense fallback="">
                <ReactQueryDevtoolsPanel />
              </Suspense>
            )}
          </main>
        </RecoilRoot>
      </RoutingContext.Provider>
    </QueryClientProvider>
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
  header: {
    position: 'sticky',
    top: 0,
    // $FlowExpectedError[incompatible-call]
    zIndex: 'var(--z-index-sticky)',
  },
});
