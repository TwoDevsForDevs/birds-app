import { Router } from 'express';

import ProfileController from '../controllers/ProfileController';

import authMiddleware from '../middlewares/authMiddleware';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(authMiddleware);

profileRouter.put('/', profileController.update);

export default profileRouter;
