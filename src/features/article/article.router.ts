import { Router } from 'express';
import { articleController } from './article.controller';

const articleRouter = Router();

articleRouter.post('/create-article', articleController.createArticle);
articleRouter.get('/', articleController.getAllArticle);
articleRouter.get('/:id', articleController.getSingleArticle);
articleRouter.put('/:id', articleController.updateArticle);
articleRouter.delete('/:id', articleController.deleteArticle);

export default articleRouter;
