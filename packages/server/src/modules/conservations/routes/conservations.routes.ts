import { Router } from 'express';

import ConservationController from '../controllers/ConservationController';

const conservationsRouter = Router();

const conservationController = new ConservationController();

conservationsRouter.get('/', conservationController.index);
conservationsRouter.get('/:id', conservationController.show);
conservationsRouter.post('/', conservationController.create);
conservationsRouter.put('/:id', conservationController.update);
conservationsRouter.delete('/:id', conservationController.delete);

export default conservationsRouter;
