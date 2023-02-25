import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { Field, Form, ErrorMessage } from 'formik';

import Select from 'react-select';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { ReactComponent as Closes } from '../../images/ButtonCloses.svg';
import { ReactComponent as Male } from '../../images/addNotice/Male.svg';
import { ReactComponent as Female } from '../../images/addNotice/Female.svg';
import { ReactComponent as iconAddPhoto } from '../../images/addPhoto.svg';
import { ReactComponent as closeImageIcon } from '../../images/close-image-icon.svg';

export const Wrapper = styled.div`
  position: relative;
  width: 280px;

  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 18px;
  padding-right: 18px;

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

export const ButtonClose = styled.button`
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

// Styles for Step 1

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

  & > span {
    color: ${({ theme }) => theme.colors.mainAccent};
  }

  & > p {
    margin-top: 28px;
  }
`;

export const NoticeForm = styled(Form)`
  text-align: left;
`;

export const Input = styled(Field)`
  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: 14px;
  line-height: calc(19 / 14);
  width: 240px;
  height: 40px;
  padding: 0px 14px;
  color: ${({ theme }) => theme.colors.grayText};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.formInputAccnt};
  border-radius: 40px;

  outline: none;

  &:nth-last-child(1) {
    margin-bottom: 8px;
  }

  ${up('tablet')} {
    padding: 0 16px;
    font-size: 16px;
    line-height: calc(26 / 16);
    padding: 14px 16px;
    width: 448px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.mainAccent};
    cursor: pointer;
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.activeAccent};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.mainBlack};
  }
`;

export const Error = styled(ErrorMessage)`
  color: ${({ theme }) => theme.colors.activeAccent};
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

export const ButtonsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  gap: 12px;

  ${up('tablet')} {
    flex-direction: row-reverse;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.mainWhite};
  width: 240px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid #f59256;

  font-size: ${({ theme }) => theme.fontSizes[2]}px;

  ${up('tablet')} {
    width: 180px;
    height: 44px;
    margin-bottom: 0px;
    margin-right: 24px;

    font-size: ${({ theme }) => theme.fontSizes[4]}px;
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

export const RadioBtnGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
`;

export const RadioBtnLabel = styled.label`
  /* height: 35px; */
  padding: 8px 28px;
  border-radius: 40px;
  border: 2px solid #f59256;
  /* background: ${({ theme }) => theme.colors.mainWhite}; */
  /* color: black; */

  font-weight: ${({ theme }) => theme.fontWeights[1]};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  font-family: ${({ theme }) => theme.fonts[1]};
  line-height: calc(19 / 14);

  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.mainWhite};
    background-color: ${({ theme }) => theme.colors.mainAccent};
  }
  ${up('tablet')} {
    font-size: 20px;
  }
`;

export const RadioBtn = styled(Field)`
  /* Приховати чекбокс!! */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: absolute;

  &:checked + label {
    background-color: #f59256;
    color: #fff;
  }
`;

// стилі react-select вино тут перебиваються складно в них норм розібратися, починаються із Select_Notice '__control' та тд те що треба перебити
export const CustomSelect = styled(Select)`
  .Select_Notice__control {
    width: 240px;
    margin-top: 8px;
    padding: 0 14px;

    font-family: ${({ theme }) => theme.fonts[1]};
    font-weight: ${({ theme }) => theme.fontWeights[0]};
    font-size: 14px;
    line-height: calc(19 / 14);

    color: ${({ theme }) => theme.colors.grayText};
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.formInputAccnt};
    border-radius: 40px;

    cursor: pointer;

    ${up('tablet')} {
      padding-top: 0 16px;
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

// Styles for Step 2

export const RadioBtnSex = styled(Field)`
  /* Приховати чекбокс!! */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: absolute;

  &:checked + label {
    color: #f59256;
  }
`;

export const SexSection = styled.div`
  display: flex;
  gap: 39px;
`;
export const Sex = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
`;
export const FemaleIcon = styled(Female)`
  width: 26px;
  height: 46px;

  ${up('tablet')} {
    width: 39px;
    height: 60px;
  }
`;

export const MaleIcon = styled(Male)`
  width: 36px;
  height: 36px;
  ${up('tablet')} {
    width: 54px;
    height: 54px;
  }
`;

export const LabelSex = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 32px;
`;

export const CommentInput = styled(Field)`
  resize: none;

  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: 14px;
  line-height: calc(19 / 14);

  width: 240px;
  height: 137px;
  padding: 16px 14px;

  color: ${({ theme }) => theme.colors.grayText};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.formInputAccnt};
  border-radius: 40px;

  outline: none;

  ${up('tablet')} {
    padding: 0 16px;
    font-size: 16px;
    line-height: calc(26 / 16);
    padding: 14px 16px;
    width: 448px;
    height: 159px;
  }
  ${up('pc')} {
    height: 191px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.mainAccent};
    cursor: pointer;
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.activeAccent};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.mainBlack};
    height: 100%;
  }
`;

export const AddImagelabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 116px;
  height: 116px;

  background: #fdf7f2;
  border-radius: 20px;
  cursor: pointer;

  ${up('tablet')} {
    width: 140px;
    height: 140px;
  }

  &.show_img {
    display: none;
  }
`;

export const InputFile = styled(Field)`
  display: none; ;
`;
export const AddPhoto = styled(iconAddPhoto)`
  position: absolute;
  stroke: #111111;
`;

export const ImageThumb = styled.div`
  margin-top: 20px;
  position: relative;

  width: 116px;
  height: 116px;

  ${up('tablet')} {
    width: 140px;
    height: 140px;
  }
`;
export const Image = styled.img`
  width: 116px;
  height: 116px;

  background: #fdf7f2;
  border-radius: 20px;

  ${up('tablet')} {
    width: 140px;
    height: 140px;
  }
`;

export const CancelIcon = styled(closeImageIcon)`
  fill: ${({ theme }) => theme.colors.mainAccent};
  width: 18px;
  height: 18px;

  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.colors.mainWhite};
  }
`;

export const ImageDel = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  border-color: ${({ theme }) => theme.colors.mainAccent};
  top: -17px;
  right: -17px;

  width: 34px;
  height: 34px;

  background-color: ${({ theme }) => theme.colors.background};

  border-radius: 80%;
  border: none;
  cursor: pointer;

  ${up('tablet')} {
    width: 44px;
    height: 44px;
    top: -22px;
    right: -22px;
  }

  &:hover {
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    background-color: ${({ theme }) => theme.colors.mainAccent};
  }

  &:hover ${ClosesIcon} {
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    fill: ${({ theme }) => theme.colors.mainWhite};
  }
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
