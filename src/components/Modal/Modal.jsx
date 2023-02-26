import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onSelector } from 'redux/InputPets/inputPetsSlice';
import { Overlay, Modal } from './Modal.styled';

export const ModalMenu = ({ children, open, onClose }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener('keydown', handlerKeyDown);
    function handlerKeyDown(e) {
      if (e.code === 'Escape') {
        dispatch(onSelector());
        onClose();
      }
    }

    return () => {
      window.removeEventListener('keydown', handlerKeyDown);
    };
  }, [onClose, dispatch]);

  function onCloseOverlay(e) {
    if (e.target === e.currentTarget) {
      onClose();
      dispatch(onSelector());
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
