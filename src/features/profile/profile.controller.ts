import { Request, Response } from 'express';
import { profileService } from './profile.service';

const createProfile = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await profileService.createProfileDB(payload);

    res.json({
      status: true,
      message: 'Profile created successfully',
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

const getAllProfile = async (req: Request, res: Response) => {
  try {
    const result = await profileService.getALlProfileDB();

    res.json({
      status: true,
      message: 'Articles are retrieved successfully',
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

const getSingleProfile = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await profileService.getSingleProfileDB(id);

    res.json({
      status: true,
      message: 'Single profile is retrieve successfully',
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

const updateProfile = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const payload = req.body;

    const result = await profileService.updateProfileDB(id, payload);

    res.json({
      status: true,
      message: 'Profile is update successfully',
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

const deleteProfile = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await profileService.deleteProfileDB(id);

    res.json({
      status: true,
      message: 'Profile is delete successfully',
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

export const profileController = {
  createProfile,
  getAllProfile,
  getSingleProfile,
  updateProfile,
  deleteProfile,
};
