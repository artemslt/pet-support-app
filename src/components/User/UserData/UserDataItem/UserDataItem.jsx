import { useState, useEffect } from 'react';
import { Label, Input } from './UserDataItem.styled';

const initialState = {
  userName: 'anna',
  userEmail: 'aa@mail.com',
  userBirthday: '00.00.0000',
  userPhone: '044',
  userCity: 'Kyiv',
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

  const isAnyEditing =
    !isNameDisabled ||
    !isEmailDisabled ||
    !isBirthdayDisabled ||
    !isPhoneDisabled ||
    !isCityDisabled;

  //   const [iconColor, setIconColor] = useState('#f59256');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');

  const profileSelector = initialState; // replace with useSelector();
  const { userName, userEmail, userBirthday, userPhone, userCity } =
    profileSelector;

  const valueChangeHandler = event => {
    const { name, value } = event.currentTarget;
    console.log('name', name);
    console.log('value', value);

    if (name === 'userName') {
      setName(value);
    }
    if (name === 'userEmail') {
      setEmail(value);
    }
    if (name === 'userBirthday') {
      setBirthday(value);
    }
    if (name === 'userPhone') {
      setPhone(value);
    }
    if (name === 'userCity') {
      setCity(value);
    }
  };

  useEffect(() => {
    setName(userName);
    setEmail(userEmail);
    setBirthday(userBirthday);
    setPhone(userPhone);
    setCity(userCity);
  }, [userName, userEmail, userBirthday, userPhone, userCity]);

  const editDataHandler = (event, userValue, isDisabled, setIsDisabled) => {
    event.preventDefault();
    // const { value } = event.currentTarget.attributes.name;
    if (isDisabled) {
      setIsDisabled(false);
    }
  };

  const saveDataHandler = (event, userValue, isDisabled, setIsDisabled) => {
    event.preventDefault();
    if (!isDisabled) {
      const actionName = new UserNameChangeAction();
      actionName.userName = userName;

      const actionEmail = new UserEmailChangeAction();
      actionEmail.userEmail = userEmail;

      const actionBirthday = new UserBirthdayChangeAction();
      actionBirthday.userBirthday = userBirthday;

      const actionPhone = new UserPhoneChangeAction();
      actionPhone.userPhone = userPhone;

      const actionCity = new UserCityChangeAction();
      actionCity.userCity = userCity;
      console.log('dispatch', userCity);
      // dispatch(action);
      setIsDisabled(true);
    }
  };

  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column', paddingTop: 36 }}
      >
        <div>
          <Label htmlFor="userName">Name:</Label>
          <Input
            type="text"
            name="userName"
            disabled={isNameDisabled}
            value={name}
            onChange={valueChangeHandler}
          />
          {isNameDisabled && (
            <button
              name="userName"
              disabled={isAnyEditing}
              onClick={event =>
                editDataHandler(event, name, isNameDisabled, setIsNameDisabled)
              }
            >
              Edit
            </button>
          )}
          {!isNameDisabled && (
            <button
              type="submit"
              name="userName"
              onClick={event =>
                saveDataHandler(event, name, isNameDisabled, setIsNameDisabled)
              }
            >
              Save
            </button>
          )}
        </div>
        <div>
          <Label htmlFor="userEmail">Email:</Label>
          <Input
            type="text"
            name="userEmail"
            disabled={isEmailDisabled}
            value={email}
            onChange={valueChangeHandler}
          />
          {isEmailDisabled && (
            <button
              name="userEmail"
              disabled={isAnyEditing}
              onClick={event =>
                editDataHandler(
                  event,
                  email,
                  isEmailDisabled,
                  setIsEmailDisabled
                )
              }
            >
              Edit
            </button>
          )}
          {!isEmailDisabled && (
            <button
              type="submit"
              name="userEmail"
              onClick={event =>
                saveDataHandler(
                  event,
                  email,
                  isEmailDisabled,
                  setIsEmailDisabled
                )
              }
            >
              Save
            </button>
          )}
        </div>

        <div>
          <Label htmlFor="userBirthday">Birthday:</Label>
          <Input
            type="text"
            name="userBirthday"
            disabled={isBirthdayDisabled}
            value={birthday}
            onChange={valueChangeHandler}
          />
          {isBirthdayDisabled && (
            <button
              name="userBirthday"
              disabled={isAnyEditing}
              onClick={event =>
                editDataHandler(
                  event,
                  birthday,
                  isBirthdayDisabled,
                  setIsBirthdayDisabled
                )
              }
            >
              Edit
            </button>
          )}
          {!isBirthdayDisabled && (
            <button
              type="submit"
              name="userBirthday"
              onClick={event =>
                saveDataHandler(
                  event,
                  birthday,
                  isBirthdayDisabled,
                  setIsBirthdayDisabled
                )
              }
            >
              Save
            </button>
          )}
        </div>

        <div>
          <Label htmlFor="userPhone"> Phone:</Label>
          <Input
            type="text"
            name="userPhone"
            disabled={isPhoneDisabled}
            value={phone}
            onChange={valueChangeHandler}
          />
          {isPhoneDisabled && (
            <button
              name="userPhone"
              disabled={isAnyEditing}
              onClick={event =>
                editDataHandler(
                  event,
                  phone,
                  isPhoneDisabled,
                  setIsPhoneDisabled
                )
              }
            >
              Edit
            </button>
          )}
          {!isPhoneDisabled && (
            <button
              type="submit"
              name="userPhone"
              onClick={event =>
                saveDataHandler(
                  event,
                  phone,
                  isPhoneDisabled,
                  setIsPhoneDisabled
                )
              }
            >
              Save
            </button>
          )}
        </div>

        <div>
          <Label htmlFor="userCity">City:</Label>
          <Input
            type="text"
            name="userCity"
            disabled={isCityDisabled}
            value={city}
            onChange={valueChangeHandler}
          />
          {isCityDisabled && (
            <button
              name="userCity"
              disabled={isAnyEditing}
              onClick={event =>
                editDataHandler(event, city, isCityDisabled, setIsCityDisabled)
              }
            >
              Edit
            </button>
          )}
          {!isCityDisabled && (
            <button
              type="submit"
              name="userCity"
              onClick={event =>
                saveDataHandler(event, city, isCityDisabled, setIsCityDisabled)
              }
            >
              Save
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
