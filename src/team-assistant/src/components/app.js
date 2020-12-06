// @flow

import { useEffect, type Node } from 'react';
import * as sx from '@adeira/sx';
import { Navbar, breakpoints, Toast, Spinner } from '@tbergq/components';
import { init, IntlVariations } from 'fbt';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { RecoilRoot } from 'recoil';
import { RouterRenderer, RoutingContext, createRouter } from '@tbergq/router';
import { createHashHistory } from 'history';

import translations from '../../translatedFbts.json';
import Routes from './router';
import environment from '../relay/environment';
import getLanguage from './get-language';
import './yup-locale';

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
    <RelayEnvironmentProvider environment={environment}>
      <RecoilRoot>
        <RoutingContext.Provider value={router.context}>
          <Navbar brand="Team assistant" />
          <main data-testid="app" className={styles('container')}>
            <RouterRenderer loader={<Spinner />} />
            <Toast />
          </main>
        </RoutingContext.Provider>
      </RecoilRoot>
    </RelayEnvironmentProvider>
  );
}

const styles = sx.create({
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
