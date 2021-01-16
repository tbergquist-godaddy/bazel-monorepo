// @flow

import { renderHook } from '@testing-library/react-hooks';
import { QueryClient } from 'react-query';
import { Wrapper } from '@tj/test-utils/render';
import program1 from '@tj/mocks/program/responses/program1.json';

import { useProgram } from '../fetch-programs';

const queryClient = new QueryClient();

describe('useProgram', () => {
  it('returns null if no id is passed', async () => {
    const { result, waitFor } = renderHook(() => useProgram(), {
      wrapper: Wrapper,
      initialProps: { queryClient },
    });

    await waitFor(() => result.current.isFetched);
    expect(result.current.data).toBeNull();
  });

  it('fetches the program', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useProgram(1), {
      wrapper: Wrapper,
      initialProps: { queryClient },
    });

    await waitForNextUpdate();
    expect(result.current.data).toEqual(program1);
  });
});
