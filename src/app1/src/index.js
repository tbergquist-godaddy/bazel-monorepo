import * as React from 'react';
import { render } from 'react-dom';
import { Heading } from '@tbergq/components';
import '@tbergq/components/compile/src/theme.css'

function App() {
  return <Heading level="h1">My pretty app to come</Heading>;
}

const rootDiv = document.querySelector('#root');

render(<App />, rootDiv);
