import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
// import css from './modal.module.css';
import { Overlay, Modal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

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

  return createPortal(
    <Overlay
      onKeyDown={onCloseOverlay}
      onClick={e => onCloseOverlay(e)}
      className={!open ? 'isHidden' : 'show'}
    >
      <Modal className={open ? 'show ' : null}>
        {open ? <>{children}</> : null}
      </Modal>
    </Overlay>,
    modalRoot
  );
};
