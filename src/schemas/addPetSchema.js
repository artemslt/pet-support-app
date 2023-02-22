import * as yup from 'yup';
const nameRegexp = /^([a-zA-Zа-яА-ЯёЁ-А-Яа-яёЁЇїІіЄєҐґ\s]+)$/;
const birthdayRegexp = /^(\d{1,2})\.(\d{1,2})(?:\.(\d{4}))?$/;

export const AddPetSchemaPageOne = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegexp, 'Name has the format "Barsik"')
    .min(2, 'Name should be 2 characters minimum.')
    .max(16, 'Name should be 16 characters maximum.')
    .required('Name is required'),
  birthday: yup
    .string()
    .matches(birthdayRegexp, 'Birthday has the format "12.05.2022"')
    .required('Birthday required'),
  breed: yup
    .string()
    .matches(nameRegexp, 'Breed must contain only letters')
    .min(3, 'Breed should be 3 characters minimum.')
    .max(40, 'Breed should be 40 characters maximum.')
    .required('Breed is required'),
});

export const AddPetSchemaPageTwo = yup.object().shape({
  photo: yup.string().required('Photo required'),
  comment: yup
    .string()
    .min(8, 'Comment should be 8 characters minimum.')
    .max(120, 'Comment should be 120 characters maximum.')
    .required('Comment is required'),
});
