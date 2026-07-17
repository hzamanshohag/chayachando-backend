import { IHighlight } from "./highlight.interface";
import highlightModel from "./highlight.model";

const createHighlightDB = async (payload: IHighlight): Promise<IHighlight> => {
  const result = await highlightModel.create(payload);
  return result;
};

const getALlHighlightDB = async () => {
  const result = await highlightModel.find();
  return result;
};

const getSingleHighlightDB = async (id: string) => {
  const highlighById = await highlightModel.findById(id).exec();
  if (!highlighById) {
    throw new Error('Highlight not found');
  }
  const result = await highlightModel.findById(id);
  return result;
};

const updateHighlightDB = async (id: string, payload: IHighlight) => {
  const highlighById = await highlightModel.findById(id).exec();
  if (!highlighById) {
    throw new Error('Highlight not found');
  }
  const result = await highlightModel.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteHighlightDB = async (id: string) => {
  const highlighById = await highlightModel.findById(id).exec();
  if (!highlighById) {
    throw new Error('Highlight not found');
  }
  const result = await highlightModel.findByIdAndDelete(id);
  return result;
};

export const highlightService = {
  createHighlightDB,
  getALlHighlightDB,
  getSingleHighlightDB,
  updateHighlightDB,
  deleteHighlightDB,
};