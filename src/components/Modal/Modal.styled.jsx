import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
  visibility: hidden;
  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  transition: 0.5s;
  &.isHidden {
    opacity: 0;
  }

  &.show_modal {
    opacity: 1;
    visibility: visible;
  }
`;

export const Modal = styled.div`
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  transform: scale(0.5);
  transition: 0.4s all;
  &.show {
    transform: scale(1);
    max-height: 90%;
    overflow: auto;
  }
  &.show::-webkit-scrollbar {
    display: none;
  }
  &.hidden {
    transform: scale(0.5);
    transition: 0.4s all;
  }
`;
