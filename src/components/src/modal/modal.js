// @flow

import { type Node, useEffect, useRef } from 'react';
import { create } from '@adeira/sx';
import { CSSTransition } from 'react-transition-group';

import breakpoints from '../breakpoints';
import './modal.css';

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
    <CSSTransition timeout={100} in={isVisible} unmountOnExit className="modal">
      <div>
        <div
          ref={backdropRef}
          onClick={handleClickOutside}
          className={`modal__modal-backdrop ${styles('backdrop')}`}
          data-testid="modalBackdrop"
          role="dialog"
        >
          <div className={`modal__modal-content ${styles('modal')}`}>
            <div className={styles('header')}>
              <div>{title != null ? title : null}</div>
              <button
                onClick={onClose}
                aria-label={closeLabel}
                className={styles('closeButton')}
                type="button"
              >
                &times;
              </button>
            </div>
            <div className={styles('content')}>{children}</div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

const styles = create({
  backdrop: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // $FlowExpectedError[incompatible-call]
    zIndex: 'var(--z-index-modal)',
    overflow: 'auto',
  },
  modal: {
    backgroundColor: 'var(--color-white)',
    marginTop: '6rem',
    marginBottom: '6rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 'var(--space-normal)',
    borderRadius: 'var(--border-radius-large)',
    width: '100%',
    [breakpoints.tablet]: {
      maxWidth: 'min(750px, 80%)',
    },
    [breakpoints.desktop]: {
      maxWidth: 'min(970px, 80%)',
    },
    [breakpoints.largeDesktop]: {
      maxWidth: 'min(1170px, 80%)',
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton: {
    'background': 'none',
    'border': 'none',
    'fontSize': '3rem',
    'outline': 'none',
    'padding': '0 var(--space-small)',
    'cursor': 'pointer',
    ':focus': {
      backgroundColor: 'rgba(0,0,0, 0.1)',
      borderRadius: '50%',
    },
    ':hover': {
      backgroundColor: 'rgba(0,0,0, 0.1)',
      borderRadius: '50%',
    },
  },
  content: {
    marginTop: 'var(--space-normal)',
  },
});
