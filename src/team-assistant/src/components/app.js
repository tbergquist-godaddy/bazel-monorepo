// @flow

import { useEffect, type Node } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import * as sx from '@adeira/sx';
import { Navbar, breakpoints, Toast } from '@tbergq/components';
import { init, IntlVariations } from 'fbt';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { RecoilRoot } from 'recoil';

import translations from '../../translatedFbts.json';
import Routes from './router';
import environment from '../relay/environment';
import getLanguage from './get-language';
import './yup-locale';

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
        <Router>
          <Navbar brand="Team assistant" />
          <div data-testid="app" className={styles('container')}>
            <Routes />
            <Toast />
          </div>
        </Router>
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
