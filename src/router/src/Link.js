// @flow

import { type Node } from 'react';

import { useRoutingContext } from './RoutingContext';

/**
 * An alternative to react-router's Link component that works with
 * our custom RoutingContext.
 */
type Props = {
  +'to': string,
  +'children': Node,
  +'className'?: string,
  +'aria-label'?: string,
};

const Link = ({ to, children, className, ...rest }: Props): Node => {
  const router = useRoutingContext();

  // When the user clicks, change route
  const changeRoute = (event) => {
    event.preventDefault();
    router.history.push(to);
  };

  // Callback to preload just the code for the route:
  // we pass this to onMouseEnter, which is a weaker signal
  // that the user *may* navigate to the route.
  const preloadRouteCode = () => {
    router.preloadCode(to);
  };

  // Callback to preload the code and data for the route:
  // we pass this to onMouseDown, since this is a stronger
  // signal that the user will likely complete the navigation
  const preloadRoute = () => {
    router.preload(to);
  };

  return (
    <a
      href={to}
      onClick={changeRoute}
      onMouseEnter={preloadRouteCode}
      onMouseDown={preloadRoute}
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
};

export default Link;
