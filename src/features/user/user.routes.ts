import { Router } from 'express';
import { userController } from './user.controller';
import auth from '../../middlewares/auth';

const userRouter = Router();

userRouter.post('/create-user', userController.createUser);
userRouter.get('/', auth('admin'), userController.getUserDB);
userRouter.get('/:id', auth('admin'), userController.getSingleUserDB);
userRouter.put('/:id', auth('admin'), userController.updateUserDB);
userRouter.delete('/:id', auth('admin'), userController.deleteUserDB);

export default userRouter;
