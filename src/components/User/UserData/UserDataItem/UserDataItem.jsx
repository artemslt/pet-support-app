import * as yup from 'yup';
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import { registerSchema } from '../../../../schemas/authValidationSchemas';
import {
  DataInputWrapp,
  Label,
  LabelDatePicker,
  Input,
  InputDatePicker,
  InputDatePickerWrapp,
  InputWrapper,
  EditBtn,
  ErrorMessage,
  // NotAuthorized,
} from './UserDataItem.styled';
import { updateUser } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';

import { ReactComponent as EditPenIcon } from './editPenIcon.svg';
import { ReactComponent as EditSaveIcon } from './editSaveIcon.svg';

export const UserDataItem = () => {
  const [isNameDisabled, setIsNameDisabled] = useState(true);
  const [isEmailDisabled, setIsEmailDisabled] = useState(true);
  const [isBirthdayDisabled, setIsBirthdayDisabled] = useState(true);
  const [isPhoneDisabled, setIsPhoneDisabled] = useState(true);
  const [isCityDisabled, setIsCityDisabled] = useState(true);
  const [startDate, setStartDate] = useState();

  const iconColor = '#f59256';
  const iconColorDisabled = 'rgba(0,0,0,0.6)';

  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);

  useEffect(() => {
    if (currentUser.birthday) {
      const parts = currentUser.birthday.split('.');
      if (parts.length === 3)
        setStartDate(new Date(parts[2], parts[1] - 1, parts[0]));
    }
  }, [currentUser.birthday]);

  const isAnyEditing =
    !isNameDisabled ||
    !isEmailDisabled ||
    !isBirthdayDisabled ||
    !isPhoneDisabled ||
    !isCityDisabled;

  const onSubmitClick = useCallback(
    (event, field) => {
      setTimeout(() => {
        if (field === 'name') setIsNameDisabled(!isNameDisabled);
        if (field === 'email') setIsEmailDisabled(!isEmailDisabled);
        if (field === 'birthday') setIsBirthdayDisabled(!isBirthdayDisabled);
        if (field === 'phone') setIsPhoneDisabled(!isPhoneDisabled);
        if (field === 'location') setIsCityDisabled(!isCityDisabled);
      }, 0);

      return true;
    },
    [
      isNameDisabled,
      isEmailDisabled,
      isBirthdayDisabled,
      isPhoneDisabled,
      isCityDisabled,
    ]
  );

  const onSubmit = event => {
    dispatch(
      updateUser({
        name: event.name,
        email: event.email,
        birthday: startDate.toLocaleString().slice(0, 10),
        phone: event.phone,
        location: event.location,
      })
    );
  };

  return (
    <div>
      <DataInputWrapp>
        <Formik
          initialValues={currentUser}
          validationSchema={yup.object().shape({
            name: registerSchema.fields.name,
            email: registerSchema.fields.email,
            phone: registerSchema.fields.phone,
            location: registerSchema.fields.location,
          })}
          onSubmit={event => onSubmit(event)}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form>
              <InputWrapper>
                <Label htmlFor="name">Name:</Label>
                <Input
                  type="text"
                  name="name"
                  disabled={isNameDisabled}
                  onChange={e => {
                    console.log(e.target.name, e.target.value);
                    setFieldValue(e.target.name, e.target.value);
                  }}
                  style={{
                    border: `${
                      isNameDisabled
                        ? '1px solid transparent'
                        : '1px solid #F5925680'
                    }`,
                    borderRadius: 40,
                    backgroundColor: `${
                      isNameDisabled ? 'transparent' : '#FDF7F2'
                    }`,
                  }}
                />
                {isNameDisabled && (
                  <EditBtn
                    type="submit"
                    disabled={isAnyEditing}
                    onClick={() => setIsNameDisabled(!isNameDisabled)}
                  >
                    <EditPenIcon
                      fill={isAnyEditing ? iconColorDisabled : iconColor}
                      width="20"
                      height="20"
                    />
                  </EditBtn>
                )}
                {!isNameDisabled && (
                  <EditBtn
                    type="submit"
                    onClick={e => onSubmitClick(e, 'name')}
                  >
                    <EditSaveIcon width="20" height="20" />
                  </EditBtn>
                )}
              </InputWrapper>
              {touched.name && errors.name && (
                <ErrorMessage>{errors.name}</ErrorMessage>
              )}

              <InputWrapper>
                <Label htmlFor="email">Email:</Label>
                <Input
                  type="text"
                  name="email"
                  disabled={isEmailDisabled}
                  onChange={e => {
                    console.log(e.target.name, e.target.value);
                    setFieldValue(e.target.name, e.target.value);
                  }}
                  style={{
                    border: `${
                      isEmailDisabled
                        ? '1px solid transparent'
                        : '1px solid #F5925680'
                    }`,
                    borderRadius: 40,
                    backgroundColor: `${
                      isEmailDisabled ? 'transparent' : '#FDF7F2'
                    }`,
                  }}
                />
                {isEmailDisabled && (
                  <EditBtn
                    type="submit"
                    disabled={isAnyEditing}
                    onClick={() => setIsEmailDisabled(!isEmailDisabled)}
                  >
                    <EditPenIcon
                      fill={isAnyEditing ? iconColorDisabled : iconColor}
                      width="20"
                      height="20"
                    />
                  </EditBtn>
                )}
                {!isEmailDisabled && (
                  <EditBtn
                    type="submit"
                    onClick={e => onSubmitClick(e, 'email')}
                  >
                    <EditSaveIcon width="20" height="20" />
                  </EditBtn>
                )}
              </InputWrapper>
              {touched.email && errors.email && (
                <ErrorMessage>{errors.email}</ErrorMessage>
              )}

              <InputWrapper>
                <LabelDatePicker htmlFor="birthday">Birthday:</LabelDatePicker>
                <InputDatePickerWrapp>
                  <InputDatePicker
                    selected={startDate}
                    active={!isBirthdayDisabled}
                    dateFormat="dd.MM.yyyy"
                    name="birthday"
                    placeholderText={'00.00.0000'}
                    disabled={isBirthdayDisabled}
                    onChange={date => setStartDate(date)}
                    minDate={new Date('01.01.1900')}
                    maxDate={new Date()}
                    showDisabledMonthNavigation
                    shouldCloseOnSelect={true}
                  />
                </InputDatePickerWrapp>
                {isBirthdayDisabled && (
                  <EditBtn
                    type="submit"
                    name="birthday"
                    onClick={() => setIsBirthdayDisabled(!isBirthdayDisabled)}
                    disabled={isAnyEditing}
                    isDateEdit={true}
                  >
                    <EditPenIcon
                      fill={isAnyEditing ? iconColorDisabled : iconColor}
                      width="20"
                      height="20"
                    />
                  </EditBtn>
                )}
                {!isBirthdayDisabled && (
                  <EditBtn
                    type="submit"
                    onClick={e => onSubmitClick(e, 'birthday')}
                    isDateEdit={true}
                  >
                    <EditSaveIcon width="20" height="20" />
                  </EditBtn>
                )}
              </InputWrapper>

              <InputWrapper>
                <Label htmlFor="phone">Phone:</Label>
                <Input
                  type="text"
                  name="phone"
                  disabled={isPhoneDisabled}
                  onChange={e => {
                    console.log(e.target.name, e.target.value);
                    setFieldValue(e.target.name, e.target.value);
                  }}
                  style={{
                    border: `${
                      isPhoneDisabled
                        ? '1px solid transparent'
                        : '1px solid #F5925680'
                    }`,
                    borderRadius: 40,
                    backgroundColor: `${
                      isPhoneDisabled ? 'transparent' : '#FDF7F2'
                    }`,
                  }}
                />
                {isPhoneDisabled && (
                  <EditBtn
                    type="submit"
                    disabled={isAnyEditing}
                    onClick={() => setIsPhoneDisabled(!isPhoneDisabled)}
                  >
                    <EditPenIcon
                      fill={isAnyEditing ? iconColorDisabled : iconColor}
                      width="20"
                      height="20"
                    />
                  </EditBtn>
                )}
                {!isPhoneDisabled && (
                  <EditBtn
                    type="submit"
                    onClick={e => onSubmitClick(e, 'phone')}
                  >
                    <EditSaveIcon width="20" height="20" />
                  </EditBtn>
                )}
              </InputWrapper>
              {touched.phone && errors.phone && (
                <ErrorMessage>{errors.phone}</ErrorMessage>
              )}

              <InputWrapper>
                <Label htmlFor="location">City:</Label>
                <Input
                  type="text"
                  name="location"
                  disabled={isCityDisabled}
                  onChange={e => {
                    console.log(e.target.name, e.target.value);
                    setFieldValue(e.target.name, e.target.value);
                  }}
                  style={{
                    border: `${
                      isCityDisabled
                        ? '1px solid transparent'
                        : '1px solid #F5925680'
                    }`,
                    borderRadius: 40,
                    backgroundColor: `${
                      isCityDisabled ? 'transparent' : '#FDF7F2'
                    }`,
                  }}
                />
                {isCityDisabled && (
                  <EditBtn
                    type="submit"
                    disabled={isAnyEditing}
                    onClick={() => setIsCityDisabled(!isCityDisabled)}
                  >
                    <EditPenIcon
                      fill={isAnyEditing ? iconColorDisabled : iconColor}
                      width="20"
                      height="20"
                    />
                  </EditBtn>
                )}
                {!isCityDisabled && (
                  <EditBtn
                    type="submit"
                    onClick={e => onSubmitClick(e, 'location')}
                  >
                    <EditSaveIcon width="20" height="20" />
                  </EditBtn>
                )}
              </InputWrapper>
              {touched.location && errors.location && (
                <ErrorMessage>{errors.location}</ErrorMessage>
              )}
            </Form>
          )}
        </Formik>
      </DataInputWrapp>
    </div>
  );
};
