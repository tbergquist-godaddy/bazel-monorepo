// @flow

import { useEffect } from 'react';

export default function useMatchMedia(breakpoint: string | number, cb: (boolean) => void) {
  useEffect(() => {
    const onChange = ({ matches }) => {
      cb(matches);
    };
    const mq = window.matchMedia(`(min-width:${breakpoint}px)`);
    mq.addEventListener('change', onChange);
    onChange(mq);

    return () => {
      mq.removeEventListener('change', onChange);
    };
  }, [breakpoint, cb]);
}
