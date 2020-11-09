import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../../../config/upload';

import BirdRegisterController from '../controllers/BirdRegisterController';
import BirdRegisterViewsController from '../controllers/BirdRegisterViewsController';

const birdRegistersRouter = Router();
const upload = multer(uploadConfig);

const birdRegisterController = new BirdRegisterController();
const birdRegisterViewsController = new BirdRegisterViewsController();

birdRegistersRouter.get('/', birdRegisterController.index);
birdRegistersRouter.get('/:id', birdRegisterController.show);
birdRegistersRouter.post(
  '/',
  upload.single('image'),
  birdRegisterController.create
);
birdRegistersRouter.post('/views', birdRegisterViewsController.create);

export default birdRegistersRouter;
