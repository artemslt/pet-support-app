import i18n from 'i18n';
import * as yup from 'yup';
const nameRegexp = /^([a-zA-Zа-яА-ЯёЁёЁЇїІіҐґЄє\s]+)$/;
const birthdayRegexp = /^(\d{1,2})\.(\d{1,2})(?:\.(\d{4}))?$/;

export const AddPetSchemaPageOne = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegexp, i18n.t('pet_name_match'))
    .min(2, i18n.t('pet_name_min'))
    .max(16, i18n.t('pet_name_max'))
    .required(i18n.t('pet_name_required')),
  birthday: yup
    .string()
    .matches(birthdayRegexp, i18n.t('birthday_match'))
    .required(i18n.t('birthday_required')),
  breed: yup
    .string()
    .matches(nameRegexp, i18n.t('breed_match'))
    .min(2, i18n.t('breed_min'))
    .max(40, i18n.t('breed_max'))
    .required(i18n.t('breed_required')),
});

export const AddPetSchemaPageTwo = yup.object().shape({
  photo: yup.string().required(i18n.t('photo_required')),
  comment: yup
    .string()
    .min(8, i18n.t('commet_min_'))
    .max(120, i18n.t('commet_max_'))
    .required(i18n.t('commet_required_')),
});

i18n.t('photo_required');
