import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onSelector } from 'redux/InputPets/inputPetsSlice';
import { Overlay, Modal } from './Modal.styled';

export const ModalMenu = ({ children, open, onClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', handlerKeyDown);
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    function handlerKeyDown(e) {
      if (e.code === 'Escape') {
        document.body.style.overflow = '';
        dispatch(onSelector());

        onClose();
      }
    }

    return () => {
      window.removeEventListener('keydown', handlerKeyDown);
    };
  }, [onClose, dispatch, open]);

  function onCloseOverlay(e) {
    if (e.target === e.currentTarget) {
      document.body.style.overflow = '';
      onClose();
      dispatch(onSelector());
    }
  }

  return (
    <Overlay
      onKeyDown={onCloseOverlay}
      onClick={e => onCloseOverlay(e)}
      className={open ? 'show_modal' : 'isHidden'}
    >
      <Modal className={open ? 'show ' : 'hidden'}>
        {open && <>{children}</>}
      </Modal>
    </Overlay>
  );
};
