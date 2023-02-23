import { parse, isDate } from 'date-fns';
import * as yup from 'yup';

// check the date of birth
const today = new Date();
function parseDateString(value, originalValue) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, 'dd.MM.yyyy', new Date());

  return parsedDate;
}
// for exemple Brovary, Kyiv or Akhtyrka, Sumy
const locationRegexp =
  /^(?:(?:\w+-\w+)+|(?:\w+)+),\s(?:(?:\w+-\w+)+|(?:\w+)+)$/;

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
    .max(16, 'Name should be 16 characters maximum.'),
  date: yup
    .date('Date must be in format dd.MM.yyyy')
    .transform(parseDateString)
    .max(today),
  breed: yup
    .string()
    .min(2, 'Breed should be 2 characters minimum.')
    .max(40, 'Name should be 40 characters maximum.'),
});

export const appPetSchemaStep2 = yup.object().shape({
  sex: yup.string(),
  location: yup
    .string()
    .matches(locationRegexp, 'Location must be in format City, Region.')
    .required('Location is required field'),
  price: yup
    .string()
    .matches(/^(?!0\d)(\d+|\d*\.\d*[1-9]\d*)$/g)
    .required(),
  img: yup.string(),
  comment: yup
    .string()
    .min(10, 'Comment should be 10 characters minimum.')
    .max(100, 'Comment should be 30 characters maximum.'),
});
