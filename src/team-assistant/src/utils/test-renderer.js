// @flow

import type { Element } from 'react';
import { render, type RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Toast } from '@tbergq/components';

export default function testRenderer(ui: Element<any>): RenderResult<> {
  return render(
    <MemoryRouter>
      <RecoilRoot>
        <>
          {ui}
          <Toast />
        </>
      </RecoilRoot>
    </MemoryRouter>,
  );
}
