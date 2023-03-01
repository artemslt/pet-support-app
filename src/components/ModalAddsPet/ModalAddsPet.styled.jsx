import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { ReactComponent as Closes } from '../../images/ButtonCloses.svg';
import { ReactComponent as iconAddPhoto } from '../../images/addPhoto.svg';
import { ReactComponent as closeImageIcon } from '../../images/close-image-icon.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { Form, Field, ErrorMessage } from 'formik';

export const Wrapper = styled.div`
  position: relative;
  display: flex;

  padding: 40px 20px;
  ${up('tablet')} {
    padding: 40px 80px;
  }
  ${up('pc')} {
  }
`;

export const ClosesIcon = styled(Closes)`
  width: 16px;
  height: 15.06px;
  ${up('tablet')} {
    width: 20px;
    height: 20.05px;
  }
`;

export const ButtonCloses = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  font-size: 24px;
  line-height: calc(33 / 24);
  color: ${({ theme }) => theme.colors.mainBlack};
  text-align: center;
  margin-bottom: 28px;

  ${up('tablet')} {
    font-size: 36px;
    line-height: calc(49 / 36);
    margin-bottom: 40px;
  }
`;

export const WrapperBtn = styled.div`
  ${up('tablet')} {
    display: flex;
    flex-direction: row-reverse;
  }
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;
export const FormStyled = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;

  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  font-size: 18px;
  line-height: calc(26 / 18);
  margin-bottom: 16px;

  color: ${({ theme }) => theme.colors.mainBlack};
  ${up('tablet')} {
    font-size: 24px;
    line-height: calc(26 / 24);

    margin-bottom: 28px;
  }
  &:nth-child(3) {
    margin-bottom: 40;
  }
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  bottom: -20px;
  left: 4%;
  font-family: ${prop => prop.theme.fonts[1]};
  padding: ${prop => prop.theme.space[1]}px ${prop => prop.theme.space[3]}px;
  font-size: 10px;
  color: ${prop => prop.theme.colors.activeAccent};
`;

export const Input = styled(Field)`
  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: 14px;
  line-height: calc(19 / 14);
  width: 240px;
  padding: 8.7px 8px;
  color: ${({ theme }) => theme.colors.grayText};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.formInputAccnt};
  border-radius: 40px;
  cursor: pointer;
  margin-top: 8px;
  ${up('tablet')} {
    font-size: 16px;
    line-height: calc(26 / 16);
    padding: 7.9px 16px;
    width: 448px;
    margin-top: 12px;
  }
  outline: none;
  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.activeAccent};
  }
`;

export const InputDatePicker = styled(DatePicker)`
  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: 14px;
  line-height: calc(19 / 14);
  width: 240px;
  padding: 8.7px 8px;
  color: ${({ theme }) => theme.colors.grayText};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.formInputAccnt};
  border-radius: 40px;
  cursor: pointer;
  margin-top: 8px;
  ${up('tablet')} {
    font-size: 16px;
    line-height: calc(26 / 16);
    padding: 7.9px 16px;
    width: 448px;
    margin-top: 12px;
  }
  outline: none;
  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.activeAccent};
  }
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.mainBlack};
  background: ${({ theme }) => theme.colors.mainWhite};
  width: 240px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid #f59256;
  margin-bottom: 12px;

  ${up('tablet')} {
    width: 180px;
    height: 44px;
    margin-bottom: 0px;
    margin-right: 24px;
    &:first-child {
      margin-right: 0px;
    }
  }
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.mainAccent};
    color: ${({ theme }) => theme.colors.mainWhite};
  }
  &.active {
    background: ${({ theme }) => theme.colors.mainAccent};
    color: ${({ theme }) => theme.colors.mainWhite};

    &:hover {
      color: ${({ theme }) => theme.colors.mainBlack};
      background: ${({ theme }) => theme.colors.mainWhite};
    }
  }

  &[name='next'],
  &[name='back'] {
    background-color: ${({ theme }) => theme.colors.mainAccent};
    color: ${({ theme }) => theme.colors.mainWhite};
  }

  &[name='next']:hover,
  &[name='next']:focus {
    background-color: ${({ theme }) => theme.colors.mainWhite};
    color: ${({ theme }) => theme.colors.mainBlack};
  }

  &[name='next']:disabled,
  &[name='back']:disabled {
    opacity: 0.5;

    &:hover {
      background-color: ${({ theme }) => theme.colors.mainAccent};
      color: ${({ theme }) => theme.colors.mainWhite};
      opacity: 0.5;
    }
  }
`;

export const TitleAddPhoto = styled.span`
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;
  ${up('tablet')} {
    font-size: 20px;
    line-height: calc(27 / 20);
    margin-bottom: 12px;
  }
`;

export const InputHidden = styled(Field)`
  display: none;
`;

export const AddPhoto = styled(iconAddPhoto)`
  position: absolute;
  stroke: ${({ theme }) => theme.colors.grayText};
`;

export const AddImage = styled.label`
  width: 208px;
  height: 208px;
  left: 36px;
  top: 135px;
  object-fit: cover;

  ${up('tablet')} {
    width: 182px;
    height: 182px;
  }

  background: #fdf7f2;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.Add_Image_show {
    cursor: pointer;

    &:hover ${AddPhoto} {
      transition: cubic-bezier(0.075, 0.82, 0.165, 1);
      stroke: ${({ theme }) => theme.colors.mainAccent};
    }
  }
`;

export const ImgBox = styled.div`
  position: relative;
  width: 208px;
  height: 208px;
  border-radius: 20px;
  display: none;
  &.show_img {
    display: block;
  }

  ${up('tablet')} {
    width: 182px;
    height: 182px;
  }
`;

export const Image = styled.img`
  position: absolute;
  z-index: 999;
  width: 208px;
  height: 208px;
  border-radius: 20px;

  ${up('tablet')} {
    width: 182px;
    height: 182px;
  }
`;

export const CancelIcon = styled(closeImageIcon)`
  fill: ${({ theme }) => theme.colors.mainAccent};
`;
export const ButtonClose = styled.button`
  position: absolute;
  width: 25px;
  height: 25px;
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

  display: none;

  &.button_closse__show {
    display: block;
  }
`;

export const Comment = styled(Field)`
  width: 240px;
  height: 100px;
  padding: 12px 14px;

  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: 14px;
  line-height: calc(26 / 14);
  outline: none;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.formInputAccnt};
  border-radius: 20px;
  overflow: auto;
  resize: none;
  cursor: pointer;
  ${up('tablet')} {
    padding: 16px;
    width: 394px;
    height: 116px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.mainBlack};
  }
`;

export const CommentTitle = styled.span`
  font-size: 18px;
  line-height: calc(26 / 18);
  margin-bottom: 8px;
  ${up('tablet')} {
    font-size: 18px;
    line-height: calc(26 / 18);
  }
  margin-bottom: 12px;
`;

export const CustomSelect = styled(Select)`
  .Select__control {
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

    .Select__control {
      height: 10px;
      width: 100%;
      border: 1px solid #a1a1a1;
      border-radius: 0;
      cursor: pointer;
    }
  }

  .Select__control--is-focused {
    border-color: transparent;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.mainAccent};
    outline: none;
  }

  .Select__menu {
    font-family: ${({ theme }) => theme.fonts[1]};
    font-weight: ${({ theme }) => theme.fontWeights[0]};
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
    cursor: pointer;
  }

  .Select__control:hover {
    border-color: ${({ theme }) => theme.colors.mainAccent};
    cursor: pointer;
  }
  .Select__control:focus {
    border-color: ${({ theme }) => theme.colors.activeAccent};
  }
`;

export const BreedInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ButtonRemoveSelect = styled.button`
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.activeAccent};
  background-color: transparent;
`;
export const NoOptionsMessageSpan = styled.p`
  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: 14px;
  line-height: calc(19 / 14);
  color: ${({ theme }) => theme.colors.grayText};
`;

export const ErrorSelect = styled.p`
  position: absolute;
  bottom: -20px;
  left: 4%;
  font-family: ${prop => prop.theme.fonts[1]};
  padding: ${prop => prop.theme.space[1]}px ${prop => prop.theme.space[3]}px;
  font-size: 10px;
  color: ${prop => prop.theme.colors.activeAccent};
`;
