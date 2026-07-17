import { THero } from "./hero.interface";
import heroModel from "./hero.model";

const createHeroDB = async (payload: THero): Promise<THero> => {
  const result = await heroModel.create(payload);
  return result;
};

const getALlHeroDB = async () => {
  const result = await heroModel.find();
  return result;
};

const getSingleHeroDB = async (id: string) => {
  const articleById = await heroModel.findById(id).exec();
  if (!articleById) {
    throw new Error('Home Hero Article not found');
  }
  const result = await heroModel.findById(id);
  return result;
};

const updateHeroDB = async (id: string, payload: THero) => {
  const articleById = await heroModel.findById(id).exec();
  if (!articleById) {
    throw new Error('Home Hero Article not found');
  }
  const result = await heroModel.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteHeroDB = async (id: string) => {
  const articleById = await heroModel.findById(id).exec();
  if (!articleById) {
    throw new Error('Home Hero Article not found');
  }
  const result = await heroModel.findByIdAndDelete(id);
  return result;
};

export const HeroService = {
  createHeroDB,
  getALlHeroDB,
  getSingleHeroDB,
  updateHeroDB,
  deleteHeroDB,
};