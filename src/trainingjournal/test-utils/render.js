// @flow

import { render as originalRender, type RenderResult } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { RoutingContext, createRouter } from '@tbergq/router';
import { createHashHistory } from 'history';
import { Toast } from '@tbergq/components';

import Routes from '../src/components/router';

const router = createRouter(Routes, createHashHistory());

export default function render(ui: any): RenderResult<> {
  return originalRender(
    <RoutingContext.Provider value={router.context}>
      <RecoilRoot>
        <>
          {ui}
          <Toast />
        </>
      </RecoilRoot>
    </RoutingContext.Provider>,
  );
}
