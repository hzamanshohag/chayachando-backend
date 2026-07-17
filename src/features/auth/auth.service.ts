import { ICreateUser } from '../user/user.interface';
import { User } from '../user/user.model';
import { ILoginUser } from './auth.interface';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const registerDB = async (payload: ICreateUser) => {
  const result = await User.create(payload);
  return result;
};
const loginDB = async (payload: ILoginUser) => {
  const user = await User.findOne({ email: payload?.email });
  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordMatch = await bcrypt.compare(payload.pass, user?.pass);
  if (!isPasswordMatch) {
    throw new Error('Password is wrong');
  }

  const token = jwt.sign(
    {
      email: user?.email,
      role: user?.role,
    },
    'secret',
    { expiresIn: '1d' },
  );

  const verifiedUser = {
    name: user?.name,
    email: user?.email,
    role: user?.role,
  };

  return { token, verifiedUser };
};

export const AuthService = {
  registerDB,
  loginDB,
};
