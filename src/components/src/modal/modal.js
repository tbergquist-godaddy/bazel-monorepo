// @flow

import { type Node, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './modal.module.css';
import flexStyles from '../utilities/flex.module.css';
import spacingStyles from '../utilities/spacing.module.css';
import displayStyles from '../utilities/display.module.css';

type Props = {
  +isVisible: boolean,
  +onClose: () => void,
  +closeLabel?: string,
  +title?: Node,
  +children: Node,
};

export default function Modal({
  isVisible,
  closeLabel = 'close',
  onClose,
  title,
  children,
}: Props): Node {
  const backdropRef = useRef(null);

  useEffect(() => {
    function handle(e) {
      if (e.key === 'Escape') {
        backdropRef.current?.click();
      }
    }
    window.addEventListener('keyup', handle);
    return () => {
      window.removeEventListener('keyup', handle);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (e.target === backdropRef.current) {
      // close on click outside
      onClose();
    }
  };

  return (
    <CSSTransition
      timeout={100}
      in={isVisible}
      unmountOnExit
      className={styles.modal}
      classNames={{
        enter: styles.enter,
        enterActive: styles['enter-active'],
      }}
    >
      <div>
        <div
          ref={backdropRef}
          onClick={handleClickOutside}
          className={styles['modal__modal-backdrop']}
          data-testid="modalBackdrop"
          role="dialog"
        >
          <div className={styles['modal__modal-content']}>
            <div
              className={`${displayStyles['u-display-flex']} ${flexStyles['u-space-between']} ${flexStyles['u-align-center']}`}
            >
              <div>{title != null ? title : null}</div>
              <button
                onClick={onClose}
                aria-label={closeLabel}
                className={styles['modal__close-button']}
                type="button"
              >
                &times;
              </button>
            </div>
            <div className={spacingStyles['u-margin-top-normal']}>{children}</div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}
