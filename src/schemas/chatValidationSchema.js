import * as yup from 'yup';

export const chatMessageSchema = yup.object().shape({
  message: yup
    .string()
    .min(1, 'Meassage should be 1 characters minimum.')
    .max(100, 'Message should be 100 characters maximum.'),
});
