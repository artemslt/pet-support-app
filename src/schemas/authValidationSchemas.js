import i18n from 'i18n';
import * as yup from 'yup';
const emailRegexp =
  /^([a-zA-Z0-9_.]+){1}([a-zA-Z0-9_\-.]+){1}@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,3})$/;
const passwordRegexp =
  /^(?!.* )(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&()<>,.;:/=-])[A-Za-z0-9\d@$!%*?&]/;
const passwordLoginRegexp = /^\S*$/;
const nameRegexp = /^[^\s].+(?!.*[ЫыЭэЪъ])([a-zA-Zа-яА-ЯІіЇїЄє\s']+)[^\s]$/;
const phoneRegexp = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
const locationRegexp =
  /^(?!.*[ЫыЭэЪъ])([a-zA-Zа-яА-ЯІіЇїЄє']+){2}, ([a-zA-Zа-яА-ЯІіЇїЄє']+){2}$/;

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegexp, i18n.t('email_match'))
    .min(6, i18n.t('email_min'))
    .max(63, i18n.t('email_max'))
    .required(i18n.t('email_required')),
  password: yup
    .string()
    .required(i18n.t('password_required'))
    .min(7, i18n.t('password_min'))
    .max(32, i18n.t('password_max'))
    .matches(passwordRegexp, i18n.t('password_match')),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], i18n.t('password_must'))
    .required(i18n.t('confirm')),
  name: yup.string().matches(nameRegexp, i18n.t('name_validate')),
  location: yup.string().matches(locationRegexp, i18n.t('location_validate')),
  phone: yup
    .string()
    .max(13, i18n.t('phone_max'))
    .matches(phoneRegexp, i18n.t('phone_match')),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegexp, i18n.t('email_match'))
    .min(6, i18n.t('email_min'))
    .max(63, i18n.t('email_max'))
    .required(i18n.t('email_required')),
  password: yup
    .string()
    .required(i18n.t('password_required'))
    .min(7, i18n.t('password_min'))
    .max(32, i18n.t('password_max'))
    .matches(passwordLoginRegexp, i18n.t('password_login_match')),
});

export const requestResetSchema = yup.object().shape({
  email: yup
    .string()
    .min(6, 'Email should be 6 characters minimum.')
    .max(63, 'Email should be 63 characters maximum.')
    .matches(emailRegexp, 'Email must be in format mail@mail.com')
    .required('Email is required'),
})

export const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required('Password is required')
    .min(7, 'Password should be 7 characters minimum.')
    .max(32, 'Password should be 32 characters maximum.')
    .matches(passwordRegexp, 'At least one upper and lowercase letter, number, special character, space is not allowed'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Confirm password is required'),
});