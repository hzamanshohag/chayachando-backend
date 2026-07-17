import { Router } from 'express';
import { highlightController } from './highlight.controller';

const highlightRouter = Router();

highlightRouter.post('/create-highlight', highlightController.createHighlight);
highlightRouter.get('/', highlightController.getAllHighlight);
highlightRouter.get('/:id', highlightController.getSingleHighlight);
highlightRouter.put('/:id', highlightController.updateHighlight);
highlightRouter.delete('/:id', highlightController.deleteHighlight);

export default highlightRouter;
