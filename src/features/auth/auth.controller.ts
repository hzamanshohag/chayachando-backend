import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import catchAsync from '../../middlewares/catchAsync';
import sendResponse from '../../middlewares/sendResponse';

const register = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await AuthService.registerDB(payload);

    res.json({
      status: true,
      message: 'User is register successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

const login = catchAsync(async (req, res) => {
  const result = await AuthService.loginDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User login successfully',
    token: result.token,
    data: result.verifiedUser,
  });
});

export const AuthController = { register, login };
