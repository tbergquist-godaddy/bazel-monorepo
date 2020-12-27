// @flow

import { Suspense } from 'react';
import { render as originalRender, type RenderResult } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { RoutingContext, createRouter } from '@tbergq/router';
import { createHashHistory } from 'history';
import { Toast } from '@tbergq/components';
import { QueryClientProvider, QueryClient } from 'react-query';

import Routes, { queryClient } from '../src/components/router';

const router = createRouter(Routes, createHashHistory());

type Config = {
  +queryClient?: QueryClient,
};
export default function render(ui: any, config?: Config): RenderResult<> {
  return originalRender(
    <QueryClientProvider client={config?.queryClient ?? queryClient}>
      <RoutingContext.Provider value={router.context}>
        <RecoilRoot>
          <Suspense fallback="loading">
            {ui}
            <Toast />
          </Suspense>
        </RecoilRoot>
      </RoutingContext.Provider>
    </QueryClientProvider>,
  );
}
