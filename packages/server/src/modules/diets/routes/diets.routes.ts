import { Router } from 'express';

import DietController from '../controllers/DietController';

const dietsRouter = Router();

const dietController = new DietController();

dietsRouter.get('/', dietController.index);
dietsRouter.get('/:id', dietController.show);
dietsRouter.post('/', dietController.create);
dietsRouter.put('/:id', dietController.update);
dietsRouter.delete('/:id', dietController.delete);

export default dietsRouter;
