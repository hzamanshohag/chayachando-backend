// req & res manage

import { Request, Response } from 'express';
import { articleService } from './article.service';

const createArticle = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await articleService.createArticleDB(payload);

    res.json({
      status: true,
      message: 'Article created successfully',
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
const getAllArticle = async (req: Request, res: Response) => {
  try {
    const result = await articleService.getALlArticleDB(req.query);

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

const getSingleArticle = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await articleService.getSingleArticleDB(id);
    
    res.json({
      status: true,
      message: 'Single article is retrieve successfully',
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
const updateArticle = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const payload = req.body;

    const result = await articleService.updateArticleDB(id, payload);

    res.json({
      status: true,
      message: 'Article is update successfully',
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
const deleteArticle = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await articleService.deleteArticleDB(id);

    res.json({
      status: true,
      message: 'Article is delete successfully',
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

export const articleController = {
  createArticle,
  getAllArticle,
  getSingleArticle,
  updateArticle,
  deleteArticle,
};
