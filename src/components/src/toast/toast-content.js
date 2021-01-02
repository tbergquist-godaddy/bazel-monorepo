// @flow

import { useRef, useEffect, type Node } from 'react';
import classNames from 'classnames';

import { useToastActions } from './toast-list-state';
import Alert from '../alert/alert';

type Props = $ReadOnly<{
  type: 'success' | 'danger',
  timeout?: number,
  isVisible: boolean,
  text: string | null,
  toastId: string,
}>;

export default function ToastContent(props: Props): Node {
  const toastRef = useRef(null);
  const timeoutRef = useRef();
  const { hide, remove, setVisible } = useToastActions();
  const { timeout, toastId } = props;

  useEffect(() => {
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

  useEffect(() => {
    // This component is now mounted, we are ready to animate
    requestAnimationFrame(() => {
      setVisible(toastId);
    });
  }, [setVisible, toastId]);
  return (
    <div
      className={classNames('Toast_container', {
        'Toast_container--visible': props.isVisible,
        'Toast_container--hidden': !props.isVisible,
      })}
      ref={toastRef}
    >
      <Alert type={props.type}>{props.text}</Alert>
    </div>
  );
}
