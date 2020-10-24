// @flow

import { render } from 'react-dom';
import * as sx from '@adeira/sx';

import './app.css';
import App from './components/app';
import getLanguage from './components/get-language';

const sxStyleTags = sx.renderPageWithSX(() => {}).styles;
const head = document.head;

for (const style of sxStyleTags) {
  const styleTag = document.createElement('style');
  styleTag.innerHTML = style.props.children;
  styleTag.setAttribute('data-adeira-sx', 'true');

  if (head != null) {
    // 🤷‍♂️
    head.appendChild(styleTag);
  }
}

const root = document.querySelector('#root');

const language = getLanguage();
const htmlTag = document.querySelector('html');

if (language != null && htmlTag != null) {
  htmlTag.setAttribute('lang', language.substring(0, 2));
}

if (root != null) {
  render(<App />, root);
}
