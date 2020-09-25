// @flow

import * as React from 'react';
import { render } from 'react-dom';
import { Heading } from '@tbergq/components';
// eslint-disable-next-line import/extensions
import '@tbergq/components/lib/theme.css';

function App() {
  return <Heading level="h1">My pretty app to come</Heading>;
}

const rootDiv = document.querySelector('#root');

render(<App />, rootDiv);
