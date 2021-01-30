import { Router } from 'express';

import HabitatController from '../controllers/HabitatController';

const habitatsRouter = Router();

const habitatController = new HabitatController();

habitatsRouter.get('/', habitatController.index);
habitatsRouter.get('/:id', habitatController.show);
habitatsRouter.post('/', habitatController.create);
habitatsRouter.put('/:id', habitatController.update);
habitatsRouter.delete('/:id', habitatController.delete);

export default habitatsRouter;
