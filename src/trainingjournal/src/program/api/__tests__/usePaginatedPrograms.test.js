// @flow

import { renderHook } from '@testing-library/react-hooks';
import { QueryClient } from 'react-query';
import { Wrapper } from '@tj/test-utils/render';

import { usePaginatedPrograms } from '../fetch-programs';

const queryClient = new QueryClient();

describe('usePaginatedPrograms', () => {
  it('works', async () => {
    const { result, waitFor } = renderHook(() => usePaginatedPrograms({ limit: 1 }), {
      wrapper: Wrapper,
      initialProps: { queryClient },
    });
    await waitFor(() => result.current.isFetched);

    expect(result.current.data).toMatchInlineSnapshot(`
      Object {
        "count": 1,
        "next": null,
        "previous": null,
        "results": Array [
          Object {
            "id": 1,
            "name": "program 1",
          },
        ],
      }
    `);
  });
});
