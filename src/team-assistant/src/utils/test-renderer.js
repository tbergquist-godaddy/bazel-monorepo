// @flow

import type { Element } from 'react';
import { render, type RenderResult } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { Toast } from '@tbergq/components';

export default function testRenderer(ui: Element<any>): RenderResult<> {
  return render(
    <RecoilRoot>
      <>
        {ui}
        <Toast />
      </>
    </RecoilRoot>,
  );
}
