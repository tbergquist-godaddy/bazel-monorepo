// @flow

import * as React from 'react';
import { render } from 'react-dom';

import './app.css';
import App from './components/app';

const root = document.querySelector('#root');

if (root != null) {
  render(<App />, root);
}

if (__DEV__) {
  Promise.all([import('react-dom'), import('@axe-core/react')]).then(([reactDom, reactAxe]) => {
    const axe = reactAxe.default;
    const reactDOM = reactDom.default;
    setTimeout(() => {
      axe(React, reactDOM, 1000, {});
    }, 2000);
  });
}
