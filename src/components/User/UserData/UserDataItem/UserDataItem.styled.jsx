import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { Field } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DataInputWrapp = styled.div`
  display: flex;
  flex-direction: column;
  ${up('tablet')} {
  }
  ${up('pc')} {
    /* padding-top: 50px; */
  }
`;

export const Label = styled.label`
  display: inline-block;
  font-family: 'Manrope';
  font-weight: ${prop => prop.theme.fontWeights[1]};
  font-size: 12px;
  line-height: 1.39;
  color: ${prop => prop.theme.colors.mainBlack};
  width: 82px;
  ${up('tablet')} {
    width: 119px;
    font-size: 18px;
  }
  ${up('pc')} {
    width: 90px;
  }
`;

export const LabelDatePicker = styled.label`
  display: inline-block;
  font-family: 'Manrope';
  font-weight: ${prop => prop.theme.fontWeights[1]};
  font-size: 12px;
  color: ${prop => prop.theme.colors.mainBlack};
  line-height: 1.39;
  width: 90px;
  ${up('tablet')} {
    width: 119px;
    font-size: 18px;
  }
  ${up('pc')} {
    width: 90px;
  }
`;

export const Input = styled(Field)`
  font-family: 'Manrope';
  width: 159px;
  font-size: 12px;
  color: ${prop => prop.theme.colors.mainBlack};
  padding: 4px 12px 3px;
  line-height: 1.39;
  margin-right: 30px;
  ${up('tablet')} {
    font-size: 18px;
    width: 216px;
  }
  ${up('pc')} {
    font-size: 18px;
    width: 205px;
    margin-right: 24px;
  }
`;

export const InputDatePickerWrapp = styled.div`
  width: 205px;
  ${up('tablet')} {
    margin-right: 40px;
  }
  ${up('pc')} {
    margin-right: 15px;
  }
`;

export const InputDatePicker = styled(DatePicker)`
  font-family: 'Manrope';
  font-size: 12px;
  width: 159px;
  line-height: 1.39;
  padding: 4px 12px 3px;
  background-color: transparent;
  border: 1px solid transparent;
  color: ${prop => prop.theme.colors.mainBlack};
  margin-right: 13px;
  ${({ active }) =>
    active &&
    `
border: 1px solid #F5925680;
border-radius: 40px;
background: #FDF7F2;
  `}

  ${up('tablet')} {
    width: 215px;
    font-size: 18px;
    margin-right: 30px;
    ${({ active }) =>
      active &&
      `
border: 1px solid #F5925680;
border-radius: 40px;
background: #FDF7F2;
  `}
  }
  ${up('pc')} {
    width: 205px;
    margin-right: 0;
    ${({ active }) =>
      active &&
      `
border: 1px solid #F5925680;
border-radius: 40px;
background: #FDF7F2;
  `}
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-top: 3px;
  ${up('tablet')} {
    margin-top: 7px;
  }
  ${up('pc')} {
  }
`;

export const EditBtn = styled.button`
  width: 32px;
  padding: 5px;
  background-color: ${prop => prop.theme.colors.background};
  border: none;
  border-radius: 50%;
  cursor: pointer;

  ${up('pc')} {
    margin-left: ${prop => (prop.isDateEdit ? '10px' : 0)};
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  transform: translate(110px, 0px);
  font-size: 10px;
  color: red;
`;

export const NotAuthorized = styled.div`
  font-family: 'Manrope';
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40%;
`;
