import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../../../config/upload';

import BirdController from '../controllers/BirdController';

const birdsRouter = Router();
const upload = multer(uploadConfig);

const birdController = new BirdController();

birdsRouter.get('/', birdController.index);
birdsRouter.get('/:id', birdController.show);
birdsRouter.post('/', upload.single('image'), birdController.create);

export default birdsRouter;
