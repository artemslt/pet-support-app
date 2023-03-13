import * as yup from 'yup';

export const chatMessageSchema = yup.object().shape({
  message: yup
    .string()
    .min(3, 'Meassage should be 3 characters minimum.')
    .max(300, 'Message should be 100 characters maximum.'),
});
