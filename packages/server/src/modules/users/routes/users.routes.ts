import { Router } from 'express';
import multer from 'multer';

import authMiddleware from '../middlewares/authMiddleware';
import uploadConfig from '../../../config/upload';

import UserController from '../controllers/UserController';
import UserAvatarController from '../controllers/UserAvatarController';
import ResetUserPasswordController from '../controllers/ResetUserPasswordController';

const usersRouter = Router();
const upload = multer(uploadConfig);
const userController = new UserController();
const userAvatarController = new UserAvatarController();
const resetUserPasswordController = new ResetUserPasswordController();

usersRouter.post('/', userController.create);
usersRouter.patch(
  '/avatar',
  authMiddleware,
  upload.single('avatar'),
  userAvatarController.create
);
usersRouter.delete('/', authMiddleware, userController.delete);

usersRouter.put('/reset-password', resetUserPasswordController.update);

export default usersRouter;
