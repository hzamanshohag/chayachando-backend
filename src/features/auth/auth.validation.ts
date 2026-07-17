import { z } from 'zod';

const loginValidationSchema = z.object({
  email: z.string({ required_error: 'Email is required' }).email(),
  pass: z.string({ required_error: 'password is required' }),
});

export const AuthValidation = {
  loginValidationSchema,
};
