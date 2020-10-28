import { Router } from 'express';
import multer from 'multer';

import authMiddleware from '../middlewares/authMiddleware';
import uploadConfig from '../../../config/upload';

import UserController from '../controllers/UserController';
import UserAvatarController from '../controllers/UserAvatarController';

const usersRouter = Router();
const upload = multer(uploadConfig);
const userController = new UserController();
const userAvatarController = new UserAvatarController();

usersRouter.post('/', userController.create);
usersRouter.patch(
  '/avatar',
  authMiddleware,
  upload.single('avatar'),
  userAvatarController.create
);

export default usersRouter;
