// @flow

import { type Node, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import './modal.css';
import '../utilities/flex.css';

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
          className={`modal__modal-backdrop`}
          data-testid="modalBackdrop"
          role="dialog"
        >
          <div className={`modal__modal-content`}>
            <div className="u-display-flex u-space-between u-align-center">
              <div>{title != null ? title : null}</div>
              <button
                onClick={onClose}
                aria-label={closeLabel}
                className={'modal__close-button'}
                type="button"
              >
                &times;
              </button>
            </div>
            <div className="u-margin-top-normal">{children}</div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}
