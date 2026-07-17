import { Router } from 'express';
import { heroController } from './hero.controller';

const heroRouter = Router();

heroRouter.post('/create-hero', heroController.createHero);
heroRouter.get('/', heroController.getAllHero);
heroRouter.get('/:id', heroController.getSingleHero);
heroRouter.put('/:id', heroController.updateHero);
heroRouter.delete('/:id', heroController.deleteHero);

export default heroRouter;