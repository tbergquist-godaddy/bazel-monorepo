// @flow

import { useContext, createContext, useCallback } from 'react';

const RoutingContext: $FlowFixMe = createContext(null);

/**
 * A custom context instance for our router type
 */
export default RoutingContext;

export const useRoutingContext = (): $FlowFixMe => {
  const routing = useContext(RoutingContext);

  return routing;
};

export function useNavigate(): $FlowFixMe {
  const router = useContext(RoutingContext);

  const navigate = useCallback(
    (to: string) => {
      router.history.push(to);
    },
    [router],
  );
  return navigate;
}
