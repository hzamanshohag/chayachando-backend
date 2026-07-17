import { NextFunction, Request, Response } from 'express';
import catchAsync from './catchAsync';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { User } from '../features/user/user.model';

const auth = (...requiredRole: string[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      throw new Error('You are not Authorized!');
    }

    let decoded;

    try {
        decoded = jwt.verify(token, 'secret') as JwtPayload;
    } catch (error) {
        throw new Error('You are not Authorized!');
    }

    const { role, email } = decoded;

    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found!');
    }

    if (requiredRole && !requiredRole.includes(role)) {
      throw new Error('You are not Authorized!');
    }

    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
