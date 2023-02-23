import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { Field } from 'formik';

import Select from 'react-select';

import { ReactComponent as Closes } from '../../images/ButtonCloses.svg';

export const Wrapper = styled.div`
  border: 1px solid red;

  position: relative;
  width: 280px;

  /* padding: 40px 18px; */
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

export const ButtonsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  gap: 12px;

  ${up('tablet')} {
    flex-direction: row;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.mainWhite};
  width: 240px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid #f59256;

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

  &[name='next'] {
    background-color: ${({ theme }) => theme.colors.mainAccent};
    color: ${({ theme }) => theme.colors.mainWhite};
  }

  &[name='next']:hover,
  &[name='next']:focus {
    background-color: ${({ theme }) => theme.colors.mainWhite};
    color: ${({ theme }) => theme.colors.mainBlack};
  }

  /* &[name='next']:disabled {
    background-color: grey;
    color: ${({ theme }) => theme.colors.mainBlack};
  } */
`;

export const RadioBtnGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const RadioBtnLabel = styled.label`
  /* height: 35px; */
  padding: 8px 28px;
  border-radius: 40px;
  border: 2px solid #f59256;
  /* background: ${({ theme }) => theme.colors.mainWhite}; */
  /* color: black; */

  font-weight: ${({ theme }) => theme.fontWeights[1]};
  font-size: ${({ theme }) => theme.fontWeights[1]};
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
