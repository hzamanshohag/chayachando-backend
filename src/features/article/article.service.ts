import { TArticle } from './article.interface';
import { Article } from './article.model';
import { Types } from 'mongoose';

const createArticleDB = async (payload: TArticle): Promise<TArticle> => {
  const result = await Article.create(payload);
  return result;
};
const getALlArticleDB = async (query: Record<string, unknown>) => {

  const { search, filter, sortBy = 'createdAt', sortOrder = 'desc' } = query;


    const querydata: Record<string, unknown> = {};
  if (search && typeof search === 'string') {
    querydata.$or = [
      { category: { $regex: search, $options: 'i' } },
      // { content: { $regex: search, $options: 'i' } },
    ];
  }

  if (filter && typeof filter === 'string' && filter.length === 24) {
    querydata._id = new Types.ObjectId(filter);
  } else if (filter) {
    throw new Error('Article not found');
  }

  const sortStr = `${sortOrder === 'desc' ? '-' : ''}${sortBy}`;
  const searchData = Article.find(querydata);

  const sortedData = await searchData
    .sort(sortStr)
    .select({
      _id: 1,
      image: 1,
      title: 1,
      sortDes: 1,
      longDes: 1,
      time: 1,
      category: 1,
      createdAt: 1,
      updatedAt: 1,
    })
  return sortedData;
};
// const getALlArticleDB = async () => {
//   const result = await Article.find();
//   return result;
// };
const getSingleArticleDB = async (id: string) => {
  const articleById = await Article.findById(id).exec();
  if (!articleById) {
    throw new Error('Article not found');
  }
  const result = await Article.findById(id);
  return result;
};
const updateArticleDB = async (id: string, payload: TArticle) => {
  const articleById = await Article.findById(id).exec();
  if (!articleById) {
    throw new Error('Article not found');
  }
  const result = await Article.findByIdAndUpdate(id, payload, { new: true });
  return result;
};
const deleteArticleDB = async (id: string) => {
  const articleById = await Article.findById(id).exec();
  if (!articleById) {
    throw new Error('Article not found');
  }
  const result = await Article.findByIdAndDelete(id);
  return result;
};

export const articleService = {
  createArticleDB,
  getALlArticleDB,
  getSingleArticleDB,
  updateArticleDB,
  deleteArticleDB,
};
