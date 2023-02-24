import * as yup from 'yup';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import { registerSchema } from '../../../../schemas/authValidationSchemas';
import {
  DataInputWrapp,
  Label,
  Input,
  InputDatePicker,
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
  const [startDate, setStartDate] = useState(new Date());

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

  const onSubmit = (event, isDisabled, setIsDisabled) => {
    if (isDisabled) {
      setIsDisabled(false);
    } else {
      dispatch(
        updateUser({
          name: event.name,
          email: event.email,
          birthday: startDate.toLocaleString().slice(0, 10),
          phone: event.phone,
          location: event.location,
        })
      );

      setIsDisabled(true);
    }
  };

  // if (!currentUser.email)
  //   return <NotAuthorized>Please sign in to see the data</NotAuthorized>;

  return (
    <div>
      <DataInputWrapp>
        <Formik
          initialValues={currentUser}
          validationSchema={yup.object().shape({
            name: registerSchema.fields.name,
          })}
          onSubmit={event => onSubmit(event, isNameDisabled, setIsNameDisabled)}
        >
          {({ errors, touched }) => (
            <Form>
              <InputWrapper>
                <Label htmlFor="name">Name:</Label>
                {isNameDisabled ? (
                  <Input
                    type="text"
                    name="name"
                    disabled={isNameDisabled}
                    style={{
                      border: '1px solid transparent',
                      backgroundColor: 'transparent',
                    }}
                  />
                ) : (
                  <Input
                    type="text"
                    name="name"
                    disabled={isNameDisabled}
                    style={{
                      border: '1px solid #F5925680',
                      borderRadius: 40,
                      backgroundColor: '#FDF7F2',
                    }}
                  />
                )}
                {isNameDisabled && (
                  <EditBtn type="submit" disabled={isAnyEditing}>
                    <EditPenIcon
                      fill={isAnyEditing ? iconColorDisabled : iconColor}
                      width="20"
                      height="20"
                    />
                  </EditBtn>
                )}
                {!isNameDisabled && (
                  <EditBtn type="submit">
                    <EditSaveIcon width="20" height="20" />
                  </EditBtn>
                )}
              </InputWrapper>
              {touched.name && errors.name && (
                <ErrorMessage>{errors.name}</ErrorMessage>
              )}
            </Form>
          )}
        </Formik>

        <Formik
          initialValues={currentUser}
          validationSchema={yup.object().shape({
            email: registerSchema.fields.email,
          })}
          onSubmit={event =>
            onSubmit(event, isEmailDisabled, setIsEmailDisabled)
          }
        >
          {({ errors, touched }) => (
            <Form>
              <InputWrapper>
                <Label htmlFor="email">Email:</Label>
                {isEmailDisabled ? (
                  <Input
                    type="text"
                    name="email"
                    disabled={isEmailDisabled}
                    style={{
                      border: '1px solid transparent',
                      backgroundColor: 'transparent',
                    }}
                  />
                ) : (
                  <Input
                    type="text"
                    name="email"
                    disabled={isEmailDisabled}
                    style={{
                      border: '1px solid #F5925680',
                      borderRadius: 40,
                      backgroundColor: '#FDF7F2',
                    }}
                  />
                )}
                {isEmailDisabled && (
                  <EditBtn type="submit" disabled={isAnyEditing}>
                    <EditPenIcon
                      fill={isAnyEditing ? iconColorDisabled : iconColor}
                      width="20"
                      height="20"
                    />
                  </EditBtn>
                )}
                {!isEmailDisabled && (
                  <EditBtn type="submit">
                    <EditSaveIcon width="20" height="20" />
                  </EditBtn>
                )}
              </InputWrapper>
              {touched.email && errors.email && (
                <ErrorMessage>{errors.email}</ErrorMessage>
              )}
            </Form>
          )}
        </Formik>

        <Formik
          initialValues={currentUser}
          onSubmit={event =>
            onSubmit(event, isBirthdayDisabled, setIsBirthdayDisabled)
          }
        >
          <Form>
            <InputWrapper>
              <Label htmlFor="birthday">Birthday:</Label>
              <div style={{ width: 245 }}>
                <InputDatePicker
                  selected={startDate}
                  active={!isBirthdayDisabled}
                  dateFormat="dd.MM.yyyy"
                  name="birthday"
                  disabled={isBirthdayDisabled}
                  onChange={date => setStartDate(date)}
                  maxDate={new Date()}
                  placeholderText="00.00.0000"
                  showDisabledMonthNavigation
                  shouldCloseOnSelect={true}
                />
              </div>
              {isBirthdayDisabled && (
                <EditBtn type="submit" name="birthday" disabled={isAnyEditing}>
                  <EditPenIcon
                    fill={isAnyEditing ? iconColorDisabled : iconColor}
                    width="20"
                    height="20"
                  />
                </EditBtn>
              )}
              {!isBirthdayDisabled && (
                <EditBtn type="submit">
                  <EditSaveIcon width="20" height="20" />
                </EditBtn>
              )}
            </InputWrapper>
          </Form>
        </Formik>

        <Formik
          initialValues={currentUser}
          validationSchema={yup.object().shape({
            phone: registerSchema.fields.phone,
          })}
          onSubmit={event =>
            onSubmit(event, isPhoneDisabled, setIsPhoneDisabled)
          }
        >
          {({ errors, touched }) => (
            <Form>
              <InputWrapper>
                <Label htmlFor="phone"> Phone:</Label>
                {isPhoneDisabled ? (
                  <Input
                    type="text"
                    name="phone"
                    disabled={isPhoneDisabled}
                    style={{
                      border: '1px solid transparent',
                      backgroundColor: 'transparent',
                    }}
                  />
                ) : (
                  <Input
                    type="text"
                    name="phone"
                    disabled={isPhoneDisabled}
                    style={{
                      border: '1px solid #F5925680',
                      borderRadius: 40,
                      backgroundColor: '#FDF7F2',
                    }}
                  />
                )}
                {isPhoneDisabled && (
                  <EditBtn type="submit" disabled={isAnyEditing}>
                    <EditPenIcon
                      fill={isAnyEditing ? iconColorDisabled : iconColor}
                      width="20"
                      height="20"
                    />
                  </EditBtn>
                )}
                {!isPhoneDisabled && (
                  <EditBtn type="submit">
                    <EditSaveIcon width="20" height="20" />
                  </EditBtn>
                )}
              </InputWrapper>
              {touched.phone && errors.phone && (
                <ErrorMessage>{errors.phone}</ErrorMessage>
              )}
            </Form>
          )}
        </Formik>

        <Formik
          initialValues={currentUser}
          validationSchema={yup.object().shape({
            location: registerSchema.fields.location,
          })}
          onSubmit={event => onSubmit(event, isCityDisabled, setIsCityDisabled)}
        >
          {({ errors, touched }) => (
            <Form>
              <InputWrapper>
                <Label htmlFor="location">City:</Label>
                {isCityDisabled ? (
                  <Input
                    type="text"
                    name="location"
                    disabled={isCityDisabled}
                    style={{
                      border: '1px solid transparent',
                      backgroundColor: 'transparent',
                    }}
                  />
                ) : (
                  <Input
                    type="text"
                    name="userCity"
                    disabled={isCityDisabled}
                    style={{
                      border: '1px solid #F5925680',
                      borderRadius: 40,
                      backgroundColor: '#FDF7F2',
                    }}
                  />
                )}
                {isCityDisabled && (
                  <EditBtn type="submit" disabled={isAnyEditing}>
                    <EditPenIcon
                      fill={isAnyEditing ? iconColorDisabled : iconColor}
                      width="20"
                      height="20"
                    />
                  </EditBtn>
                )}
                {!isCityDisabled && (
                  <EditBtn type="submit">
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
