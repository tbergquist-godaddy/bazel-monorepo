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
  const push = router.history.push;
  const navigate = useCallback(
    (to: string) => {
      push(to);
    },
    [push],
  );
  return navigate;
}

export function useRouteData(): $FlowFixMe {
  const router = useContext(RoutingContext);
  if (router == null) {
    return null;
  }
  const { entries } = router.get();
  return entries[0]?.routeData;
}
