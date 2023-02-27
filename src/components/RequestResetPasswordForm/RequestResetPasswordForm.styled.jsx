import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';
import { Link as RouterLink } from 'react-router-dom';

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 42px;
  ${up('tablet')} {
    padding-top: 208px;
  }
  ${up('pc')} {
    padding-top: 51px;
  }
`;

export const FormWrapper = styled.div`
  padding-top: 42px;
  ${up('tablet')} {
    padding-top: 60px;
    background-color: ${prop => prop.theme.colors.mainWhite};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
    width: 608px;
    height: 469px;
  }
  ${up('pc')} {
    width: 618px;
    height: 473px;
  }
`;

export const Heading = styled.h2`
  margin-bottom: 40px;
  text-align: center;
  font-family: ${prop => prop.theme.fonts[1]};
  letter-spacing: 0.04em;
  font-weight: ${prop => prop.theme.fontWeights[2]};
  font-size: ${prop => prop.theme.fontSizes[5]}px;
  line-height: 33px;
  color: ${prop => prop.theme.colors.mainBlack};
  ${up('tablet')} {
    font-weight: ${prop => prop.theme.fontWeights[1]};
    font-size: ${prop => prop.theme.fontSizes[7]}px;
    line-height: 49px;
  }
`;
export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoText = styled.p`
  margin-bottom: 40px;
  width: 280px;
  ${up('tablet')} {
    width: 448px;
  }
  ${up('pc')} {
    width: 458px;
  }
`;

export const Label = styled.label`
  position: relative;
  margin-bottom: 16px;
  &:last-of-type {
    margin-bottom: 40px;
  }
`;

export const Input = styled(FormikField)`
  font-family: ${prop => prop.theme.fonts[1]};
  width: 280px;
  height: 40px;
  padding: 11px 14px 12px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  background-color: ${prop => prop.theme.colors.background};
  font-weight: ${prop => prop.theme.fontWeights[0]};
  font-size: ${prop => prop.theme.fontSizes[1]}px;
  line-height: 19px;
  letter-spacing: 0.04em;
  color: ${prop => prop.theme.colors.mainBlack};
  ::placeholder {
    font-weight: ${prop => prop.theme.fontWeights[0]};
    font-size: ${prop => prop.theme.fontSizes[1]}px;
    line-height: 19px;
    letter-spacing: 0.04em;
    color: ${prop => prop.theme.colors.greyText};
  }
  &:focus {
    outline: none;
    border: 1px solid ${prop => prop.theme.colors.activeAccent};
    background-color: ${prop => prop.theme.colors.mainWhite};
  }
  ${up('tablet')} {
    width: 448px;
    height: 52px;
    padding: 14px 32px 13px;
    font-size: ${prop => prop.theme.fontSizes[3]}px;
    line-height: 25px;
    ::placeholder {
      font-size: ${prop => prop.theme.fontSizes[3]}px;
      line-height: 25px;
    }
    ${up('pc')} {
      width: 458px;
    }
  }
`;

export const Error = styled(FormikErrorMessage)`
  position: absolute;
  bottom: -16px;
  left: 0;
  font-family: ${prop => prop.theme.fonts[1]};
  padding: ${prop => prop.theme.space[1]}px ${prop => prop.theme.space[3]}px;
  font-size: 10px;
  color: ${prop => prop.theme.colors.activeAccent};
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 44px;
  margin-bottom: 16px;
  cursor: pointer;
  border-radius: 40px;
  background-color: ${prop => prop.theme.colors.background};
  border: 2px solid ${prop => prop.theme.colors.mainAccent};
  font-family: ${prop => prop.theme.fonts[1]};
  font-weight: ${prop => prop.theme.fontWeights[1]};
  font-size: ${prop => prop.theme.fontSizes[4]}px;
  line-height: 27px;
  letter-spacing: 0.04em;
  color: ${prop => prop.theme.colors.additionalBlack};
  transition: ${({ theme }) => theme.btnAnimationTransition};
  &:hover,
  &:focus {
    background-color: ${prop => prop.theme.colors.mainAccent};
    color: ${prop => prop.theme.colors.mainWhite};
  }
  &[type='submit']:disabled {
    background-color: ${({ theme }) => theme.colors.mainAccent};
    color: ${({ theme }) => theme.colors.mainWhite};
    opacity: 0.5;
  }
  ${up('tablet')} {
    background-color: ${prop => prop.theme.colors.mainWhite};
    &:hover,
    &:focus {
      background-color: ${prop => prop.theme.colors.mainAccent};
    }
    outline: none;
    width: 448px;
    height: 44px;
  }
  ${up('pc')} {
    width: 458px;
    height: 48px;
  }
`;

export const Text = styled.p`
  margin: 30px 0;
  font-family: ${prop => prop.theme.fonts[1]};
  font-weight: ${prop => prop.theme.fontWeights[0]};
  font-size: ${prop => prop.theme.fontSizes[0]}px;
  color: ${prop => prop.theme.colors.grayText};
  line-height: 16px;
  letter-spacing: 0.04em;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: ${prop => prop.theme.colors.blue};
  transition: ${({ theme }) => theme.btnAnimationTransition};
  &:hover,
  &:focus {
    color: ${prop => prop.theme.colors.activeAccent};
  }
`;
