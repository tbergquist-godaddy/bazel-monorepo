// @flow strict-local

import * as React from 'react';
import * as sx from '@adeira/sx';

/**
 * Sx doesn't support runtime styles yet, so we should run this
 * hook on each piece of lazy loaded code
 */
export default function useInjectSxStyles() {
  React.useEffect(() => {
    const sxStyleTags = sx.renderPageWithSX(() => {}).styles;
    let sxTag = document.querySelector('style[data-adeira-sx="true"]');

    if (sxTag == null) {
      sxTag = document.createElement('style');
      sxTag.setAttribute('data-adeira-sx', 'true');
      sxTag.innerHTML = sxStyleTags[0].props.children;

      if (document.head != null) {
        document.head.appendChild(sxTag);
      }
    } else {
      sxTag.innerHTML = sxStyleTags[0].props.children;
    }
  }, []);
}
