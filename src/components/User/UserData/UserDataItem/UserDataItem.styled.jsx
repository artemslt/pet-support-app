import styled from 'styled-components';
import { Field } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DataInputWrapp = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

export const Label = styled.label`
  display: inline-block;
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 18px;
  color: #111111;
  font-weight: 500;
  line-height: 1.39;
  width: 100px;
`;

export const Input = styled(Field)`
  font-family: 'Manrope';
  font-size: 18px;
  color: #111111;
  width: 215px;
  padding: 4px 12px 3px;
  line-height: 1.39;
  margin-right: 30px;
`;

export const InputDatePicker = styled(DatePicker)`
  font-family: 'Manrope';
  font-size: 18px;
  width: 215px;
  line-height: 1.39;
  margin-right: 30px;
  padding: 4px 12px 3px;
  background-color: transparent;
  border: 1px solid transparent;
  color: #111111;

  ${({ active }) =>
    active &&
    `
border: 1px solid #F5925680;
border-radius: 40px;
background: #FDF7F2;
  `}
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-top: 8px;
`;

export const EditBtn = styled.button`
  width: 32px;
  background-color: #fdf7f2;
  border: none;
  border-radius: 50%;
  padding: 5px;
`;

export const ErrorMessage = styled.div`
  font-size: 10px;
  color: red;
  position: absolute;
`;
