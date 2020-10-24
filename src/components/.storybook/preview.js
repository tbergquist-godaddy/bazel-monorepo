// @flow

import * as React from 'react';
import '../src/theme.css';
import * as sx from '@adeira/sx';
import { addDecorator } from '@storybook/react';

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

const WithSx = ({ children }) => {
  React.useEffect(() => {
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
  }, []);
  return children;
};

addDecorator((storyFn) => <WithSx>{storyFn()}</WithSx>);
