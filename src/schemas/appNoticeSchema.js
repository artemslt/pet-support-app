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

export const appPetSchemaStep1 = yup.object().shape({
  typeOfNotice: yup.string().required(),
  title: yup
    .string()
    .min(3, 'Title should be 3 characters minimum.')
    .max(30, 'Title should be 30 characters maximum.')
    .required('Title is required field'),
  name: yup
    .string()
    .min(3, 'Name should be 3 characters minimum.')
    .max(15, 'Name should be 15 characters maximum.'),
  date: yup
    .date('Date must be in format dd.MM.yyyy')
    .transform(parseDateString)
    .max(today),
  breed: yup.string(),
});

export const appPetSchemaStep2 = yup.object().shape({
  sex: yup.string(),
  location: yup
    .string()
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g,
      'Location can only contain Latin letters.'
    )
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
