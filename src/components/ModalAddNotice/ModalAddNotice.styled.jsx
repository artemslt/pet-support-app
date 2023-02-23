import Select from 'react-select';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { Field } from 'formik';
import { ReactComponent as Closes } from '../../images/ButtonCloses.svg';
import { ReactComponent as iconAddPhoto } from '../../images/addPhoto.svg';
import { ReactComponent as closeImageIcon } from '../../images/close-image-icon.svg';
export const Wrapper = styled.div`
  border: 1px solid red;
  background-color: #ffffff;
  position: relative;
  width: 280px;

  padding: 40px 20px;
  ${up('tablet')} {
    padding: 40px 80px;
    width: 608px;
  }
  ${up('pc')} {
  }
`;
export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  font-size: 24px;
  line-height: calc(33 / 24);
  color: ${({ theme }) => theme.colors.mainBlack};
  text-align: center;
  margin-bottom: 20px;

  ${up('tablet')} {
    font-size: 36px;
    line-height: calc(49 / 36);
    margin-bottom: 20px;
  }
`;

export const ClosesIcon = styled(Closes)``;

export const ButtonCloses = styled.button`
  position: absolute;

  width: 34px;
  height: 34px;
  right: 20px;
  top: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  backdrop-filter: blur(2px);
  border-radius: 80%;
  border: none;
  cursor: pointer;
  &:hover {
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    background-color: ${({ theme }) => theme.colors.mainAccent};
  }

  &:hover ${ClosesIcon} {
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    fill: ${({ theme }) => theme.colors.mainWhite};
  }
  ${up('tablet')} {
    right: 24px;
    top: 24px;
    width: 44px;
    height: 44px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;
  ${up('tablet')} {
    font-size: 20px;
    line-height: calc(27 / 20);
    margin-bottom: 28px;
  }
`;

export const LabelTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  font-size: 18px;
  line-height: calc(26 / 18);
  margin-bottom: 8px;

  color: ${({ theme }) => theme.colors.mainBlack};
  ${up('tablet')} {
    font-size: 24px;
    line-height: calc(26 / 24);

    margin-bottom: 12px;
  }
  &:nth-last-child() {
    margin-bottom: 8;
  }
`;

export const Input = styled(Field)`
  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: 14px;
  line-height: calc(19 / 14);
  width: 240px;
  height: 40px;
  padding: 0px 20px;
  color: ${({ theme }) => theme.colors.grayText};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.formInputAccnt};
  border-radius: 40px;

  &:nth-last-child(1) {
    margin-bottom: 8px;
  }

  ${up('tablet')} {
    font-size: 16px;
    line-height: calc(26 / 16);
    padding: 14px 16px;
    width: 448px;
  }
`;

// стилі зображення

export const AddImagelabel = styled.label`
  width: 116px;
  height: 116px;

  ${up('tablet')} {
    width: 140px;
    height: 140px;
  }

  background: #fdf7f2;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputFile = styled(Field)`
  display: none; ;
`;

export const ImgBox = styled.div`
  position: relative;
  width: 208px;
  height: 208px;
  border-radius: 20px;
  width: 116px;
  height: 116px;

  ${up('tablet')} {
    width: 140px;
    height: 140px;
  }
`;

export const Image = styled.img`
  position: absolute;
  z-index: 999;
  top: 0;
  border-radius: 20px;

  width: 116px;
  height: 116px;

  ${up('tablet')} {
    width: 140px;
    height: 140px;
  }
`;

export const AddPhoto = styled(iconAddPhoto)`
  position: absolute;
`;

export const CancelIcon = styled(closeImageIcon)`
  fill: ${({ theme }) => theme.colors.mainAccent};
  width: 8px;
`;
export const ButtonClose = styled.button`
  position: absolute;
  /* width: 18px;
  height: 18px; */
  z-index: 9999;
  top: -5px;
  right: -5px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.activeAccent};
  border-radius: 50%;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.mainAccent};
    border: 1px solid ${({ theme }) => theme.colors.mainAccent};
  }

  &:hover ${CancelIcon} {
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    fill: ${({ theme }) => theme.colors.mainWhite};
  }
`;

// стилі react-select вино тут перебиваються складно в них норм розібратися, починаються із Select_Notice '__control' та тд те що треба перебити
export const CustomSelect = styled(Select)`
  .Select_Notice__control {
    font-family: ${({ theme }) => theme.fonts[1]};
    font-weight: ${({ theme }) => theme.fontWeights[0]};
    font-size: 14px;
    line-height: calc(19 / 14);
    width: 240px;
    padding: 0;
    color: ${({ theme }) => theme.colors.grayText};
    margin-top: 8px;
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.formInputAccnt};
    border-radius: 40px;
    cursor: pointer;
    ${up('tablet')} {
      font-size: 16px;
      line-height: calc(26 / 16);
      padding: 2px 8px;
      width: 448px;
    }

    .Select_Notice__control {
      height: 10px;
      width: 100%;
      border: 1px solid #a1a1a1;
      border-radius: 0;
      cursor: pointer;
    }
  }

  .Select_Notice__control--is-focused {
    border-color: transparent;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.mainAccent};
    outline: none;
  }

  .Select_Notice__menu {
    font-family: ${({ theme }) => theme.fonts[1]};
    font-weight: ${({ theme }) => theme.fontWeights[0]};
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
    cursor: pointer;
  }

  .Select_Notice__control:hover {
    border-color: ${({ theme }) => theme.colors.mainAccent};
    cursor: pointer;
  }
  .Select_Notice__control:focus {
    border-color: ${({ theme }) => theme.colors.activeAccent};
  }
`;
