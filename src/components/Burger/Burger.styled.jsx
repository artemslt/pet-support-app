import styled from 'styled-components';

export const StyledBurger = styled.div`
  position: relative;

  top: 0;
  right: 0;
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
