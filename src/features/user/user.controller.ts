// req & res manage

import { Request, Response } from 'express';
import { UserService } from './user.service';


const createUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const result = await UserService.createUser(payload);

    res.json({
      status: true,
      message: 'User created successfully',
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

const getUserDB = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUser();

    res.json({
      status: true,
      message: 'User are retrieved successfully',
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

const getSingleUserDB = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await UserService.getSingleUser(id);

    res.json({
      status: true,
      message: 'Single user is retrieve successfully',
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

const updateUserDB = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const payload = req.body;

    const result = await UserService.updateUser(id, payload);

    res.json({
      status: true,
      message: 'User is update successfully',
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
const deleteUserDB = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await UserService.deleteUser(id);

    res.json({
      status: true,
      message: 'User is deleted successfully',
      data: {},
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

export const userController = {
  createUser,
  getUserDB,
  getSingleUserDB,
  updateUserDB,
  deleteUserDB,
};
