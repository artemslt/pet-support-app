import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Form = styled.form`
  /* position: relative; */
`;

export const AvatarThumb = styled.div`
  display: flex;
  position: relative;
  width: 233px;
  height: 233px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  background: ${prop => prop.theme.colors.background};
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
  ${up('tablet')} {
    margin-left: 40px;
    padding-bottom: 0;
  }
  ${up('pc')} {
    margin-left: auto;
    margin-bottom: 35px;
  }
`;

export const ImgPlaceholder = styled.img`
  width: 71px;
  height: 71px;
  margin: 0 auto;
`;

export const Avatar = styled.img`
  display: block;
  margin: 0px auto;
  width: 233px;
  height: 233px;
  background: ${prop => prop.theme.colors.background};
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
`;

export const Button = styled.button`
  position: absolute;
  display: flex;
  width: 105px;
  top: 225px;
  right: -5px;
  border: none;

  background: none;
  fill: ${prop => prop.theme.colors.mainAccent};

  ${up('tablet')} {
    margin-bottom: 20px;
    top: 219px;
    right: -25px;
  }
  ${up('pc')} {
    margin-bottom: 0;
    top: 210px;
    right: -50px;
  }
`;

export const EditWrapp = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Text = styled.span`
  margin-left: 4px;
  font-family: 'Manrope';
  font-weight: ${prop => prop.theme.fontWeights[0]};
  font-size: 12px;
  letter-spacing: 0.04em;
  line-height: 22px;
  color: ${prop => prop.theme.colors.mainBlack};
`;
