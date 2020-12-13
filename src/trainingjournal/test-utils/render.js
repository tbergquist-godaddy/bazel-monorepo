// @flow

import { render as originalRender, type RenderResult } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { RoutingContext, createRouter } from '@tbergq/router';
import { createHashHistory } from 'history';
import { Toast } from '@tbergq/components';
import { ReactQueryCacheProvider } from 'react-query';

import Routes, { cache } from '../src/components/router';

const router = createRouter(Routes, createHashHistory());

export default function render(ui: any): RenderResult<> {
  return originalRender(
    <ReactQueryCacheProvider queryCache={cache}>
      <RoutingContext.Provider value={router.context}>
        <RecoilRoot>
          <>
            {ui}
            <Toast />
          </>
        </RecoilRoot>
      </RoutingContext.Provider>
    </ReactQueryCacheProvider>,
  );
}
