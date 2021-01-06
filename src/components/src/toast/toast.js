// @flow

import type { Element, ComponentType } from 'react';

import { useToastListState } from './toast-list-state';
import ToastContent from './toast-content';
import styles from './toast.module.css';

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
    <div className={styles.Toast}>
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
