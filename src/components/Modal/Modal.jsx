import React, { useEffect } from 'react';

import { Overlay, Modal } from './Modal.styled';

export const ModalMenu = ({ children, open, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handlerKeyDown);
    function handlerKeyDown(e) {
      if (e.code === 'Escape') {
        onClose();
      }
    }

    return () => {
      window.removeEventListener('keydown', handlerKeyDown);
    };
  }, [onClose]);

  function onCloseOverlay(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <Overlay
      onKeyDown={onCloseOverlay}
      onClick={e => onCloseOverlay(e)}
      className={!open ? 'isHidden' : 'show'}
    >
      <Modal className={open ? 'show ' : null}>
        {open ? <>{children}</> : null}
      </Modal>
    </Overlay>
  );
};
