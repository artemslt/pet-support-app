import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { Field } from 'formik';

import { ReactComponent as Closes } from '../../images/ButtonCloses.svg';

export const Wrapper = styled.div`
  border: 1px solid red;

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

  &:nth-last-child(1){
    margin-bottom: 8px;

  } 

  ${up('tablet')} {
    font-size: 16px;
    line-height: calc(26 / 16);
    padding: 14px 16px;
    width: 448px;
  }
`;