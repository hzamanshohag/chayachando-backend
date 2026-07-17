import { z } from 'zod';

const userValidationSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  pass: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  role: z.enum(['user', 'admin']).optional().default('user'),
});

export const UserValidation = { userValidationSchema };
