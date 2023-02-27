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
  opacity: 0;
  visibility: hidden;
  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  &.show {
    opacity: 1;
    visibility: visible;
  }
`;

export const Modal = styled.div`
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  opacity: 0;
  transition: opacity 300ms ease-in;
  &.show {
    opacity: 1;
    max-height: 90%;
    overflow: auto;
  }
  &.show::-webkit-scrollbar {
    display: none;
  }
`;