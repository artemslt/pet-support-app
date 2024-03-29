import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';
import { Link as RouterLink } from 'react-router-dom';
import MaskedInput from 'react-text-mask';
import { ReactComponent as SpinnerIcon } from '../../images/spinner-white.svg';

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 44px;
  ${up('tablet')} {
    &[type='0'] {
      padding-top: 169px;
    }
    &[type='1'] {
      padding-top: 156px;
  }
  ${up('pc')} {
    &[type='0'] {
      padding-top: 46px;
    }
    &[type='1'] {
      padding-top: 44px;
  }
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
    &[type='0'] {
        height: 517px;
      }
      &[type='1'] {
        height: 577px;
      }
  ${up('pc')} {
    width: 618px;

    &[type='0'] {
      height: 542px;
    }
    &[type='1'] {
      height: 605px;
    }
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

export const MaskedPhoneInput = styled(MaskedInput)`
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
  font-size: 6px;
  color: ${prop => prop.theme.colors.activeAccent};
  ${up('tablet')} {
    font-size: 10px;
    Ї
`;

export const IconButton = styled.button`
  position: absolute;
  right: 3px;
  bottom: 3px;
  display: block;
  cursor: pointer;
  border: none;
  width: 30px;
  height: 30px;
  padding: 0;
  background-color: transparent;
  fill: ${prop => prop.theme.colors.greyText};
  transition: ${({ theme }) => theme.btnAnimationTransition};
  &:hover,
  &:focus {
    fill: ${prop => prop.theme.colors.mainAccent};
  }
  ${up('tablet')} {
    right: 9px;
    bottom: 9px;
  }
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 44px;
  &[type='submit'] {
    margin-bottom: 16px;
  }
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
  &:disabled {
    background-color: ${({ theme }) => theme.colors.mainAccent};
    color: ${({ theme }) => theme.colors.mainWhite};
    opacity: 0.5;
    }
  ${up('tablet')} {
    background-color: ${prop => prop.theme.colors.mainWhite};
    {
      &:hover,
      &:focus {
        background-color: ${prop => prop.theme.colors.mainAccent};
      }
    outline: none;
    width: 458px;
  }
  ${up('pc')} {
    height: 48px;
  }
`;

export const Text = styled.p`
  margin: 40px 0;
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

export const StyledSpinner = styled(SpinnerIcon)`
  position: absolute;
  left: 55px;
  ${up('tablet')} {
    left: 140px;
  }
  fill: white;
  animation: rotate 2s linear infinite;

  width: 20px;
  height: 20px;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
