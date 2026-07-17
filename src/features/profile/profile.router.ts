import { Router } from 'express';
import { profileController } from './profile.controller';

const profileRouter = Router();

profileRouter.post('/create-profile', profileController.createProfile);
profileRouter.get('/', profileController.getAllProfile);
profileRouter.get('/:id', profileController.getSingleProfile);
profileRouter.put('/:id', profileController.updateProfile);
profileRouter.delete('/:id', profileController.deleteProfile);

export default profileRouter;