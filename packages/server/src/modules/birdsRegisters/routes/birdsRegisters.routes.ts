import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../../../config/upload';

import BirdRegisterController from '../controllers/BirdRegisterController';
import BirdRegisterViewsController from '../controllers/BirdRegisterViewsController';
import BirdRegisterLikesController from '../controllers/BirdRegisterLikesController';

const birdRegistersRouter = Router();
const upload = multer(uploadConfig);

const birdRegisterController = new BirdRegisterController();
const birdRegisterViewsController = new BirdRegisterViewsController();
const birdRegisterLikesController = new BirdRegisterLikesController();

birdRegistersRouter.get('/', birdRegisterController.index);
birdRegistersRouter.get('/:id', birdRegisterController.show);
birdRegistersRouter.post(
  '/',
  upload.single('image'),
  birdRegisterController.create
);
birdRegistersRouter.post('/views', birdRegisterViewsController.create);

birdRegistersRouter.post('/like', birdRegisterLikesController.create);
birdRegistersRouter.delete('/like/:id', birdRegisterLikesController.delete);

export default birdRegistersRouter;
