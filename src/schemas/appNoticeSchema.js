import i18n from 'i18n';
import * as yup from 'yup';

// for exemple Brovary, Kyiv or Akhtyrka, Sumy
const locationRegexp = /^([А-Яа-яЁёЇїІіЄєҐґ'),\s]+|[a-zA-Z\s]+){2,}$/;

export const appPetSchemaStep1 = yup.object().shape({
  typeOfNotice: yup.string().required(),
  title: yup
    .string()
    .min(2, i18n.t('title_min'))
    .max(48, i18n.t('pet_name_max'))
    .required(i18n.t('title_required')),
  name: yup
    .string()
    .min(2, i18n.t('pet_name_min'))
    .max(16, i18n.t('pet_name_max'))
    .required(i18n.t('pet_name_required')),
  date: yup
    .string(i18n.t('date_pet_string'))
    .required(i18n.t('date_pet_required')),
  breed: yup
    .string()
    .min(2, i18n.t('breed_min'))
    .max(40, i18n.t('breed_max'))
    .required(i18n.t('breed_required')),
});

export const appPetSchemaStep2 = yup.object().shape({
  sex: yup.string().required(),
  location: yup
    .string()
    .matches(locationRegexp, i18n.t('location_match'))
    .required(i18n.t('location_required')),
  price: yup
    .string()
    .matches(/^(?!0\d)(\d+|\d*\.\d*[1-9]\d*)$/g, i18n.t('price_match'))
    .required(i18n.t('price_required')),
  img: yup.string().required(),
  comment: yup
    .string()
    .min(10, i18n.t('commet_min'))
    .max(100, i18n.t('commet_max'))
    .required(i18n.t('commet_required')),
});
