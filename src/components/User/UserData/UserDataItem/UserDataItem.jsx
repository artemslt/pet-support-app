import * as yup from 'yup';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
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
} from './UserDataItem.styled';
// import { updateUserName } from 'redux/auth/authOperations';

import { ReactComponent as EditPenIcon } from './editPenIcon.svg';
import { ReactComponent as EditSaveIcon } from './editSaveIcon.svg';

const initialState = {
  userName: 'Anna',
  userEmail: 'aa@mail.com',
  userBirthday: '00.00.0000',
  userPhone: '+380987667455',
  userCity: 'Kyiv, Kyiv',
};

class UserNameChangeAction {
  userName = '';
}

class UserEmailChangeAction {
  userEmail = '';
}

class UserBirthdayChangeAction {
  userBirthday = '';
}

class UserPhoneChangeAction {
  userPhone = '';
}

class UserCityChangeAction {
  userCity = '';
}

export const UserDataItem = () => {
  const [isNameDisabled, setIsNameDisabled] = useState(true);
  const [isEmailDisabled, setIsEmailDisabled] = useState(true);
  const [isBirthdayDisabled, setIsBirthdayDisabled] = useState(true);
  const [isPhoneDisabled, setIsPhoneDisabled] = useState(true);
  const [isCityDisabled, setIsCityDisabled] = useState(true);
  const [, setStartDate] = useState(new Date());
  const iconColor = '#f59256';
  const iconColorDisabled = 'rgba(0,0,0,0.6)';

  // const dispatch = useDispatch();

  const isAnyEditing =
    !isNameDisabled ||
    !isEmailDisabled ||
    !isBirthdayDisabled ||
    !isPhoneDisabled ||
    !isCityDisabled;

  // const [, setName] = useState('');
  // const [, setEmail] = useState('');
  // const [, setBirthday] = useState('');
  // const [, setPhone] = useState('');
  // const [, setCity] = useState('');

  // const profileSelector = initialState; // replace with useSelector();
  // const { userName, userEmail, userBirthday, userPhone, userCity } =
  //   profileSelector;

  const onSubmit = (event, isDisabled, setIsDisabled) => {
    if (isDisabled) {
      setIsDisabled(false);
    } else {
      const actionName = new UserNameChangeAction();
      actionName.userName = event.userName;

      const actionEmail = new UserEmailChangeAction();
      actionEmail.userEmail = event.userEmail;

      const actionBirthday = new UserBirthdayChangeAction();
      actionBirthday.userBirthday = event.userBirthday;

      const actionPhone = new UserPhoneChangeAction();
      actionPhone.userPhone = event.userPhone;

      const actionCity = new UserCityChangeAction();
      actionCity.userCity = event.userCity;
      console.log('event', event);
      // dispatch(updateUserName(event.userName));
      setIsDisabled(true);
    }
  };

  // useEffect(() => {
  //   setName(userName);
  //   setEmail(userEmail);
  //   setBirthday(userBirthday);
  //   setPhone(userPhone);
  //   setCity(userCity);
  // }, [userName, userEmail, userBirthday, userPhone, userCity]);

  return (
    <div>
      <DataInputWrapp>
        <Formik
          initialValues={initialState}
          validationSchema={yup.object().shape({
            userName: registerSchema.fields.name,
          })}
          onSubmit={event => onSubmit(event, isNameDisabled, setIsNameDisabled)}
        >
          {({ errors, touched }) => (
            <Form>
              <InputWrapper>
                <Label htmlFor="userName">Name:</Label>
                {isNameDisabled ? (
                  <Input
                    type="text"
                    name="userName"
                    disabled={isNameDisabled}
                    style={{
                      border: '1px solid transparent',
                      backgroundColor: 'transparent',
                    }}
                  />
                ) : (
                  <Input
                    type="text"
                    name="userName"
                    disabled={isNameDisabled}
                    style={{
                      border: '1px solid #F5925680',
                      borderRadius: 40,
                      backgroundColor: '#FDF7F2',
                    }}
                  />
                )}
                {isNameDisabled && (
                  <EditBtn
                    type="submit"
                    name="userName"
                    disabled={isAnyEditing}
                  >
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
              {touched.userName && errors.userName && (
                <ErrorMessage>{errors.userName}</ErrorMessage>
              )}
            </Form>
          )}
        </Formik>

        <Formik
          initialValues={initialState}
          validationSchema={yup.object().shape({
            userEmail: registerSchema.fields.email,
          })}
          onSubmit={event =>
            onSubmit(event, isEmailDisabled, setIsEmailDisabled)
          }
        >
          {({ errors, touched }) => (
            <Form>
              <InputWrapper>
                <Label htmlFor="userEmail">Email:</Label>
                {isEmailDisabled ? (
                  <Input
                    type="text"
                    name="userEmail"
                    disabled={isEmailDisabled}
                    style={{
                      border: '1px solid transparent',
                      backgroundColor: 'transparent',
                    }}
                  />
                ) : (
                  <Input
                    type="text"
                    name="userEmail"
                    disabled={isEmailDisabled}
                    style={{
                      border: '1px solid #F5925680',
                      borderRadius: 40,
                      backgroundColor: '#FDF7F2',
                    }}
                  />
                )}
                {isEmailDisabled && (
                  <EditBtn
                    type="submit"
                    name="userEmail"
                    disabled={isAnyEditing}
                  >
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
              {touched.userEmail && errors.userEmail && (
                <ErrorMessage>{errors.userEmail}</ErrorMessage>
              )}
            </Form>
          )}
        </Formik>

        <Formik
          initialValues={initialState}
          onSubmit={event =>
            onSubmit(event, isBirthdayDisabled, setIsBirthdayDisabled)
          }
        >
          <Form>
            <InputWrapper>
              <Label htmlFor="userBirthday">Birthday:</Label>
              <div style={{ width: 245 }}>
                <InputDatePicker
                  active={!isBirthdayDisabled}
                  dateFormat="dd.MM.yyyy"
                  value="00.00.0000"
                  name="userBirthday"
                  disabled={isBirthdayDisabled}
                  onChange={date => setStartDate(date)}
                />
              </div>
              {isBirthdayDisabled && (
                <EditBtn
                  type="submit"
                  name="userBirthday"
                  disabled={isAnyEditing}
                >
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
          initialValues={initialState}
          validationSchema={yup.object().shape({
            userPhone: registerSchema.fields.phone,
          })}
          onSubmit={event =>
            onSubmit(event, isPhoneDisabled, setIsPhoneDisabled)
          }
        >
          {({ errors, touched }) => (
            <Form>
              <InputWrapper>
                <Label htmlFor="userPhone"> Phone:</Label>
                {isPhoneDisabled ? (
                  <Input
                    type="text"
                    name="userPhone"
                    disabled={isPhoneDisabled}
                    style={{
                      border: '1px solid transparent',
                      backgroundColor: 'transparent',
                    }}
                  />
                ) : (
                  <Input
                    type="text"
                    name="userPhone"
                    disabled={isPhoneDisabled}
                    style={{
                      border: '1px solid #F5925680',
                      borderRadius: 40,
                      backgroundColor: '#FDF7F2',
                    }}
                  />
                )}
                {isPhoneDisabled && (
                  <EditBtn
                    type="submit"
                    name="userPhone"
                    disabled={isAnyEditing}
                  >
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
              {touched.userPhone && errors.userPhone && (
                <ErrorMessage>{errors.userPhone}</ErrorMessage>
              )}
            </Form>
          )}
        </Formik>

        <Formik
          initialValues={initialState}
          validationSchema={yup.object().shape({
            userCity: registerSchema.fields.location,
          })}
          onSubmit={event => onSubmit(event, isCityDisabled, setIsCityDisabled)}
        >
          {({ errors, touched }) => (
            <Form>
              <InputWrapper>
                <Label htmlFor="userCity">City:</Label>
                {isCityDisabled ? (
                  <Input
                    type="text"
                    name="userCity"
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
                  <EditBtn
                    type="submit"
                    name="userCity"
                    disabled={isAnyEditing}
                  >
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
              {touched.userCity && errors.userCity && (
                <ErrorMessage>{errors.userCity}</ErrorMessage>
              )}
            </Form>
          )}
        </Formik>
      </DataInputWrapp>
    </div>
  );
};
