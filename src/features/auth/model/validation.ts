import * as yup from 'yup';

import { LoginRequest } from '../api/types';

const MIN_PASSWORD_LENGTH = 8;

export const loginSchema: yup.ObjectSchema<LoginRequest> = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(MIN_PASSWORD_LENGTH),
});
