import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const PetListCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 280px;
  margin: 0 auto;
  ${up('tablet')} {
    width: 768px;
  }
  ${up('pc')} {
    width: 890px;
    margin: 0;
  }
`;

export const Title = styled.h3`
  font-family: 'Manrope';
  font-size: 28px;
  font-weight: ${prop => prop.theme.fontWeights[1]};
  line-height: 1.37;
  padding-left: 16px;
  color: ${prop => prop.theme.colors.mainBlack};
  ${up('pc')} {
    padding-left: 0;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 25px;
  ${up('tablet')} {
    margin: 0 0 32px 0;
  }
  ${up('pc')} {
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin: 0 0 24px;
  }
`;

export const BtnName = styled.span`
  font-family: 'Manrope';
  font-size: ${prop => prop.theme.fontSizes[4]};
  font-weight: ${prop => prop.theme.fontWeights[1]};
  line-height: 1.37;
  margin-right: 23px;
`;

export const AddBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${prop => prop.theme.colors.mainAccent};
  border: none;
  cursor: pointer;
`;

export const AddBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;

  transition: ${({ theme }) => theme.btnAnimationTransition};
  &:hover ${AddBtn}, &:hover ${BtnName}, &:focus${AddBtn}, &:focus${BtnName} {
    cursor: pointer;
    scale: ${({ theme }) => theme.btnHoverFocusScale};
  }

  ${up('tablet')} {
    padding-right: 33px;
  }
  ${up('pc')} {
    padding-right: 0;
  }
`;

export const ListContainer = styled.ul`
  margin: 0;
  padding-left: 0;
  ${up('tablet')} {
    margin: 0 auto;
  }
  ${up('pc')} {
    margin: 0;
  }
`;

export const PetCard = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 16px 20px 40px;
  margin-bottom: 22px;
  &:last-child {
    margin-bottom: 0;
  }
  background: ${prop => prop.theme.colors.mainWhite};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;

  ${up('tablet')} {
    width: 704px;
    flex-direction: row;
    padding: 20px;
  }
  ${up('pc')} {
    width: 100%;
    padding: 20px;
    margin-right: 0;
    margin-left: 0;
  }
`;

export const PetPhotoWrapper = styled.div`
  margin-bottom: 20px;
  ${up('tablet')} {
    display: flex;
    width: 240px;
    margin-right: 32px;
  }
  ${up('pc')} {
  }
`;

export const PetInfoItem = styled.div`
  position: relative;
  width: 100%;
`;

export const Text = styled.p`
  font-family: 'Manrope';
  font-size: ${prop => prop.theme.fontSizes[2]};
  line-height: 1.375;
  letter-spacing: 0.04em;
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const TextTopic = styled.span`
  font-weight: ${prop => prop.theme.fontWeights[1]};
`;

export const PetPhoto = styled.img`
  width: 240px;
  height: 240px;
  margin: 0px auto;
  border-radius: 40px;
  object-fit: cover;
  ${up('tablet')} {
    width: 161px;
    height: 161px;
  }
`;

export const PetDeleteBtn = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  ${up('tablet')} {
    background-color: ${prop => prop.theme.colors.background};
    height: 44px;
    width: 44px;
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    cursor: pointer;
  }
  ${up('pc')} {
  }
`;
