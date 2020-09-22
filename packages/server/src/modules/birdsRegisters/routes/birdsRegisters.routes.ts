import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../../../config/upload';

import BirdRegisterController from '../controllers/BirdRegisterController';

const birdRegistersRouter = Router();
const upload = multer(uploadConfig);
const birdRegisterController = new BirdRegisterController();

birdRegistersRouter.get('/', birdRegisterController.index);
birdRegistersRouter.post(
  '/',
  upload.single('image'),
  birdRegisterController.create
);

export default birdRegistersRouter;
