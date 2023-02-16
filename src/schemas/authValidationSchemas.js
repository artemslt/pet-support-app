import * as yup from 'yup';

const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const passwordRegexp = /^\S*$/;
const nameRegexp = /^([a-zA-Zа-яА-ЯёЁ\s]+)$/;
const phoneRegexp = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
const locationRegexp =
  /^(?:(?:\w+-\w+)+|(?:\w+)+),\s(?:(?:\w+-\w+)+|(?:\w+)+)$/;

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegexp, 'Email must be in format mail@mail.com')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(7, 'Password should be 7 characters minimum.')
    .max(32, 'Password should be 32 characters maximum.')
    .matches(passwordRegexp, 'Whitespace is not allowed'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Confirm password is required'),
  name: yup.string().matches(nameRegexp, 'Name must contain only letters'),
  location: yup
    .string()
    .matches(locationRegexp, 'Location must be in format City, Region'),
  phone: yup
    .string()
    .max(13, 'Pnone number must contain 12 numbers')
    .matches(phoneRegexp, 'Mobile phone must be in format +380xxxxxxxxx'),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegexp, 'Email must be in format mail@mail.com')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(7, 'Password should be 7 characters minimum.')
    .max(32, 'Password should be 32 characters maximum.')
    .matches(passwordRegexp, 'Whitespace is not allowed'),
});
