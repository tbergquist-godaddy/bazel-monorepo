// @flow

import { render } from 'react-dom';

import './app.css';
import App from './components/app';
import getLanguage from './components/get-language';

const root = document.querySelector('#root');

const language = getLanguage();
const htmlTag = document.querySelector('html');

if (language != null && htmlTag != null) {
  htmlTag.setAttribute('lang', language.substring(0, 2));
}

if (root != null) {
  render(<App />, root);
}
