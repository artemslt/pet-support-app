import styled from 'styled-components';

export const Card = styled.li`
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 40px 40px;
  background-color: ${({ theme }) => theme.colors.mainWhite};
  width: 288px;
`;

export const Image = styled.img`
  width: 100%;
  height: 288px;
  object-fit: contain;
`;

export const Thumb = styled.div`
  padding: 20px 20px 32px 20px;
`;
