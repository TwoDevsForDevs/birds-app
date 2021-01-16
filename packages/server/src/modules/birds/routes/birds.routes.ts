import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../../../config/upload';

import BirdController from '../controllers/BirdController';
import HomeBirdController from '../controllers/HomeBirdController';

const birdsRouter = Router();
const upload = multer(uploadConfig);

const birdController = new BirdController();
const homeBirdController = new HomeBirdController();

birdsRouter.get('/', birdController.index);
birdsRouter.get('/:id', birdController.show);
birdsRouter.post('/', upload.single('image'), birdController.create);

birdsRouter.get('/home/list', homeBirdController.index);

export default birdsRouter;
