import * as yup from 'yup';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import { registerSchema } from '../../../../schemas/authValidationSchemas';
import {
  Label,
  Input,
  InputDatePicker,
  WrapperDatePicker,
} from './UserDataItem.styled';

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
  const [startDate, setStartDate] = useState(new Date());

  const isAnyEditing =
    !isNameDisabled ||
    !isEmailDisabled ||
    !isBirthdayDisabled ||
    !isPhoneDisabled ||
    !isCityDisabled;

  //   const [iconColor, setIconColor] = useState('#f59256');

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
      console.log('dispatch', actionPhone.userPhone);
      // dispatch(action);
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
      <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 36 }}>
        <Formik
          initialValues={initialState}
          validationSchema={yup.object().shape({
            userName: registerSchema.fields.name,
          })}
          onSubmit={event => onSubmit(event, isNameDisabled, setIsNameDisabled)}
        >
          {({ errors, touched }) => (
            <Form>
              <Label htmlFor="userName">Name:</Label>
              <Input type="text" name="userName" disabled={isNameDisabled} />
              {isNameDisabled && (
                <button type="submit" name="userName" disabled={isAnyEditing}>
                  Edit
                </button>
              )}
              {!isNameDisabled && <button type="submit">Save</button>}

              {touched.userName && errors.userName && (
                <div
                  style={{ color: 'red', textAlign: 'center', fontSize: 10 }}
                >
                  {errors.userName}
                </div>
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
              <div>
                <Label htmlFor="userEmail">Email:</Label>
                <Input
                  type="text"
                  name="userEmail"
                  disabled={isEmailDisabled}
                />
                {isEmailDisabled && (
                  <button
                    type="submit"
                    name="userEmail"
                    disabled={isAnyEditing}
                  >
                    Edit
                  </button>
                )}
                {!isEmailDisabled && <button type="submit">Save</button>}
              </div>
              {touched.userEmail && errors.userEmail && (
                <div style={{ color: 'red', textAlign: 'center' }}>
                  {errors.userEmail}
                </div>
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
            <WrapperDatePicker>
              <Label htmlFor="userBirthday">Birthday:</Label>
              <InputDatePicker
                dateFormat="dd.MM.yyyy"
                selected={startDate}
                name="userBirthday"
                disabled={isBirthdayDisabled}
                onChange={date => setStartDate(date)}
              />
              {isBirthdayDisabled && (
                <button
                  type="submit"
                  name="userBirthday"
                  disabled={isAnyEditing}
                >
                  Edit
                </button>
              )}
              {!isBirthdayDisabled && <button type="submit">Save</button>}
            </WrapperDatePicker>
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
              <div>
                <Label htmlFor="userPhone"> Phone:</Label>
                <Input
                  type="text"
                  name="userPhone"
                  disabled={isPhoneDisabled}
                />
                {isPhoneDisabled && (
                  <button
                    type="submit"
                    name="userPhone"
                    disabled={isAnyEditing}
                  >
                    Edit
                  </button>
                )}
                {!isPhoneDisabled && <button type="submit">Save</button>}
              </div>
              {touched.userPhone && errors.userPhone && (
                <div style={{ color: 'red', textAlign: 'center' }}>
                  {errors.userPhone}
                </div>
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
              <div>
                <Label htmlFor="userCity">City:</Label>
                <Input type="text" name="userCity" disabled={isCityDisabled} />
                {isCityDisabled && (
                  <button type="submit" name="userCity" disabled={isAnyEditing}>
                    Edit
                  </button>
                )}
                {!isCityDisabled && <button type="submit">Save</button>}
              </div>
              {touched.userCity && errors.userCity && (
                <div style={{ color: 'red', textAlign: 'center' }}>
                  {errors.userCity}
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
