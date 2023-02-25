import * as yup from 'yup';

// for exemple Brovary, Kyiv or Akhtyrka, Sumy
const locationRegexp =/^([А-Яа-яЁёЇїІіЄєҐґ'),\s]+|[a-zA-Z\s]+){2,}$/;

export const appPetSchemaStep1 = yup.object().shape({
  typeOfNotice: yup.string().required(),
  title: yup
    .string()
    .min(2, 'Title should be 2 characters minimum.')
    .max(48, 'Title should be 48 characters maximum.')
    .required('Title is required field'),
  name: yup
    .string()
    .min(2, 'Name should be 2 characters minimum.')
    .max(16, 'Name should be 16 characters maximum.')
    .required('Name is required field'),
  date: yup
    .string('Date must be in format dd.MM.yyyy')
    .required('Date is required field'),
  breed: yup
    .string()
    .min(2, 'Breed should be 2 characters minimum.')
    .max(40, 'Name should be 40 characters maximum.')
    .required('Breed is required field'),
});

export const appPetSchemaStep2 = yup.object().shape({
  sex: yup.string().required(),
  location: yup
    .string()
    .matches(locationRegexp, 'Location must be in format: City, Region')
    .required('Location is required field'),
  price: yup
    .string()
    .matches(/^(?!0\d)(\d+|\d*\.\d*[1-9]\d*)$/g, "Must contain only numbers")
    .required(),
  img: yup.string().required(),
  comment: yup
    .string()
    .min(10, 'Comment should be 10 characters minimum.')
    .max(100, 'Comment should be 100 characters maximum.')
    .required('Comment is required field'),
});
