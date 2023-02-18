import styled from 'styled-components';
import { Field } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Label = styled.label`
  display: inline-block;
  font-weight: 500;
  line-height: 1.39;
  width: 83px;
  padding-right: 24px;
`;

export const Input = styled(Field)`
  width: 215px;
  line-height: 1.39;
  margin-right: 30px;
  margin-top: 15px;
`;

export const InputDatePicker = styled(DatePicker)`
  width: 215px;
  line-height: 1.39;
  margin-right: 30px;
`;

export const WrapperDatePicker = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  width: 245px;
`;
