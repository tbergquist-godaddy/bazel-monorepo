// @flow

import { useRoutingContext } from './RoutingContext';

export const useHistory = (): $FlowFixMe => {
  const routing = useRoutingContext();

  return routing.history;
};
