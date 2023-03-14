import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';
import { ReactComponent as PawIcon } from '../../images/paw-icon.svg';

export const FlexBox = styled.div`
  position: fixed;
  z-index: 10;
  bottom: 120px;
  right: 16px;
  display: flex;
  justify-content: center;
`;

export const ChatWrapper = styled.div`
  width: 308px;
  height: 523px;
  background-color: ${prop => prop.theme.colors.mainWhite};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  ${up('tablet')} {
    width: 338px;
    height: 613px;
  }
  ${up('pc')} {
  }
`;
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  background-color: ${prop => prop.theme.colors.mainAccent};
`;

export const Heading = styled.h3`
  text-align: center;
  font-family: ${prop => prop.theme.fonts[1]};
  font-weight: ${prop => prop.theme.fontWeights[1]};
  font-size: ${prop => prop.theme.fontSizes[4]}px;
  line-height: 27px;
  letter-spacing: 0.04em;
  color: ${prop => prop.theme.colors.mainWhite};

  ${up('tablet')} {
    font-weight: ${prop => prop.theme.fontWeights[1]};
    font-size: ${prop => prop.theme.fontSizes[5]}px;
    line-height: 27px;
  }
`;

export const MessageList = styled.div`
  height: 345px;
  border-radius: 10px;
  margin: 16px;
  padding: 16px;
  overflow-y: scroll;
  ${up('tablet')} {
    height: 435px;
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  position: relative;
  width: 100%;
  margin-bottom: 16px;
  &:last-of-type {
    margin-bottom: 40px;
  }
`;

export const Input = styled(FormikField)`
  font-family: ${prop => prop.theme.fonts[1]};
  width: 100%;
  height: 75px;
  padding: 11px 14px 12px;
  border: none;
  border-top: 1px solid rgba(245, 146, 86, 0.5);
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
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
  }
  ${up('tablet')} {
    padding: 14px 32px 13px;
    font-size: ${prop => prop.theme.fontSizes[3]}px;
    line-height: 25px;
    ::placeholder {
      font-size: ${prop => prop.theme.fontSizes[3]}px;
      line-height: 25px;
    }
  }
`;

export const Error = styled(FormikErrorMessage)`
  position: absolute;
  top: -18px;
  left: 0;
  font-family: ${prop => prop.theme.fonts[1]};
  padding: ${prop => prop.theme.space[1]}px ${prop => prop.theme.space[3]}px;
  font-size: 10px;
  color: ${prop => prop.theme.colors.activeAccent};
`;

export const IconButton = styled.button`
  position: absolute;
  right: 19px;
  bottom: 19px;
  display: block;
  cursor: pointer;
  border: none;
  width: 30px;
  height: 30px;
  padding: 0;
  background-color: transparent;
  fill: ${prop => prop.theme.colors.grayText};
  transition: ${({ theme }) => theme.btnAnimationTransition};
  &:hover,
  &:focus {
    fill: ${prop => prop.theme.colors.mainAccent};
  }
`;

export const StyledPawIcon = styled(PawIcon)`
  width: 22px;
  height: 22px;
  margin-right: 4px;
  fill: white;
`;

export const Messagewrapper = styled.div`
  width: 85%;
  margin-bottom: 10px;
  padding: 10px;
  background-color: ${prop => prop.theme.colors.background};
  border-radius: 10px;
  font-size: 14px;
`;

export const MessagewrapperSender = styled.div`
  width: 85%;
  margin-bottom: 10px;
  margin-left: auto;
  padding: 10px;
  background-color: rgba(85, 174, 58, 0.07);
  border-radius: 10px;
  font-size: 14px;
`;

export const AuthorTitle = styled.p`
  color: ${prop => prop.theme.colors.mainAccent};
`;

export const AuthorTitleSender = styled.p`
  text-align: right;
  color: #55ae3a;
`;

export const TextWrapper = styled.div`
  height: 100%;
`;

export const Text = styled.p`
  color: ${prop => prop.theme.colors.grayText};
  margin: 10px 0;
`;

export const DateWrapper = styled.div`
  text-align: right;
  font-size: 10px;
  color: ${prop => prop.theme.colors.grayText};
`;

export const DateWrapperSender = styled.div`
  text-align: left;
  font-size: 10px;
  color: ${prop => prop.theme.colors.grayText};
`;
