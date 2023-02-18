import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';
import { Link as RouterLink } from 'react-router-dom';

export const FormWrapper = styled.div`
  padding-top: 42px;
  ${up('mobileSizeM')} {
    padding-top: 60px;
    background-color: ${prop => prop.theme.colors.mainWhite};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
    width: 608px;
    height: 449px;
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
  ${up('mobileSizeM')} {
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
  ${up('mobileSizeM')} {
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
  font-family: ${prop => prop.theme.fonts[1]};
  padding: ${prop => prop.theme.space[1]}px ${prop => prop.theme.space[3]}px;
  font-size: 10px;
  color: ${prop => prop.theme.colors.activeAccent};
`;

export const Button = styled.button`
  width: 280px;
  height: 44px;
  margin-bottom: 40px;
  padding: 10px 28px;
  cursor: pointer;
  border-radius: 40px;
  border: none;
  background-color: ${prop => prop.theme.colors.mainAccent};
  font-family: ${prop => prop.theme.fonts[1]};
  font-weight: ${prop => prop.theme.fontWeights[1]};
  font-size: ${prop => prop.theme.fontSizes[4]}px;
  line-height: 27px;
  letter-spacing: 0.04em;
  color: ${prop => prop.theme.colors.mainWhite};
  &:hover, &:focus {
    background-color: ${prop => prop.theme.colors.activeAccent};
  }
  ${up('mobileSizeM')} {
    outline: none;
    width: 458px;
  }
  ${up('pc')} {
    height: 48px;
  }
`;

export const Text = styled.p`
  margin-bottom: 40px;
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
  &:hover, &:focus {
    color: ${prop => prop.theme.colors.activeAccent};
  }
`;
