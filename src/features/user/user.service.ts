import { ICreateUser } from './user.interface';
import { User } from './user.model';

const createUser = async (payload: ICreateUser): Promise<ICreateUser> => {
  const result = await User.create(payload);
  return result;
};

const getUser = async () => {
  const result = await User.find();
  return result;
};

const getSingleUser = async (id: string) => {
  const result = await User.findById(id);
  return result;
};

const updateUser = async (id: string, payload: ICreateUser) => {
  const result = await User.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteUser = async (id: string) => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

export const UserService = { createUser, getUser, getSingleUser, updateUser, deleteUser };
