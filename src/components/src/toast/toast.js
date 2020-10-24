// @flow

import type { Element, ComponentType } from 'react';
import { create } from '@adeira/sx';

import { useToastListState } from './toast-list-state';
import ToastContent from './toast-content';

type Props = {};

export type Config = {
  +text: string,
  +type?: 'success' | 'danger',
  +icon?: Element<any>,
  +timeout?: number,
};

export default (function Toast() {
  const toasts = useToastListState();

  return (
    <div className={styles('toast')}>
      {toasts.map((toast) => {
        return (
          <ToastContent
            key={toast.id}
            toastId={toast.id}
            text={toast.text}
            isVisible={toast.isVisible}
            type={toast.type ?? 'success'}
            timeout={toast.timeout}
          />
        );
      })}
    </div>
  );
}: ComponentType<Props>);

const styles = create({
  toast: {
    position: 'fixed',
    bottom: '16px',
    right: '16px',
    // $FlowExpectedError[incompatible-call]
    zIndex: 'var(--z-index-on-top)',
  },
});
