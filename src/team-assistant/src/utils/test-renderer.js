// @flow

import * as React from 'react';
import { render, type RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Toast } from '@tbergq/components';

export default function testRenderer(ui: React.Element<any>): RenderResult<> {
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
