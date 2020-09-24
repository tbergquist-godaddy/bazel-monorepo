// @flow

import * as React from 'react';
import { create } from '@adeira/sx';

import { useToastActions } from './toast-list-state';
import Alert from '../alert';

type Props = $ReadOnly<{
  type: 'success' | 'danger',
  timeout?: number,
  isVisible: boolean,
  text: string | null,
  toastId: string,
}>;

export default function ToastContent(props: Props): React.Node {
  const toastRef = React.useRef(null);
  const timeoutRef = React.useRef();
  const { hide, remove, setVisible } = useToastActions();
  const { timeout, toastId } = props;

  React.useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      hide(toastId);
      setTimeout(() => {
        remove(toastId);
      }, 300);
    }, timeout);
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [timeout, hide, remove, toastId]);

  React.useEffect(() => {
    // This component is now mounted, we are ready to animate
    requestAnimationFrame(() => {
      setVisible(toastId);
    });
  }, [setVisible, toastId]);
  return (
    <div className={styles('toast', props.isVisible ? 'visible' : 'hidden')} ref={toastRef}>
      <Alert type={props.type}>{props.text}</Alert>
    </div>
  );
}

const styles = create({
  toast: {
    minWidth: '200px',
    transition: 'all 0.3s ease-out',
    marginLeft: 'var(--space-large)',
  },
  visible: {
    transform: 'translateX(0px)',
    opacity: 1,
  },
  hidden: {
    transform: 'translateX(200px)',
    opacity: 0,
  },
});
