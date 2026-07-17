import { TProfile } from "./profile.interface";
import { Profile } from "./profile.model";

const createProfileDB = async (payload: TProfile): Promise<TProfile> => {
  const result = await Profile.create(payload);
  return result;
};

const getALlProfileDB = async () => {
  const result = await Profile.find();
  return result;
};

const getSingleProfileDB = async (id: string) => {
  const articleById = await Profile.findById(id).exec();
  if (!articleById) {
    throw new Error('Profile not found');
  }
  const result = await Profile.findById(id);
  return result;
};

const updateProfileDB = async (id: string, payload: TProfile) => {
  const articleById = await Profile.findById(id).exec();
  if (!articleById) {
    throw new Error('Profile not found');
  }
  const result = await Profile.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteProfileDB = async (id: string) => {
  const articleById = await Profile.findById(id).exec();
  if (!articleById) {
    throw new Error('Profile not found');
  }
  const result = await Profile.findByIdAndDelete(id);
  return result;
};

export const profileService = {
  createProfileDB,
  getALlProfileDB,
  getSingleProfileDB,
  updateProfileDB,
  deleteProfileDB,
};