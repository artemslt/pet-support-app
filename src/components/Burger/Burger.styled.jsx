import styled from 'styled-components';

export const StyledBurger = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.mainBlack};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  } */

  position: fixed;

  top: 32px;
  right: 25px;
  height: 20px;
  width: 30px;
  z-index: 10;
  span {
    position: absolute;
    width: 100%;
    height: 3px;
    top: 50%;
    left: 0;
    display: block;
    background: ${({ theme }) => theme.colors.mainBlack};
    transition: 0.5s;
    opacity: ${({ open }) => (!open ? '1' : '0')};
  }
  span:first-child {
    transform: ${({ open }) => (!open ? 'rotate(0deg)' : 'rotate(405deg)')};
    top: ${({ open }) => (!open ? '16px' : '50%')};
    opacity: ${({ open }) => (!open ? '1' : '1')};
  }
  span:last-child {
    opacity: ${({ open }) => (!open ? '1' : '1')};
    top: ${({ open }) => (!open ? '3px' : '50%')};
    transform: ${({ open }) => (!open ? 'rotate(0deg)' : 'rotate(-405deg)')};
  }
  &:hover {
    cursor: pointer;
  }
`;
