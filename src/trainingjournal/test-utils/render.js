// @flow

import { Suspense, type Node } from 'react';
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

export const Wrapper = ({ children, config }: { children: Node, config?: Config }): Node => (
  <QueryClientProvider client={config?.queryClient ?? queryClient}>
    <RoutingContext.Provider value={router.context}>
      <RecoilRoot>
        <Suspense fallback="loading">
          {children}
          <Toast />
        </Suspense>
      </RecoilRoot>
    </RoutingContext.Provider>
  </QueryClientProvider>
);

export default function render(ui: any, config?: Config): RenderResult<> {
  return originalRender(<Wrapper config={config}>{ui}</Wrapper>);
}
