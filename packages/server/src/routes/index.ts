import { Router } from 'express';

import authMiddleware from '../modules/users/middlewares/authMiddleware';

import usersRouter from '../modules/users/routes/users.routes';
import sessionsRouter from '../modules/users/routes/sessions.routes';
import profileRouter from '../modules/users/routes/profile.routes';
import dietsRouter from '../modules/diets/routes/diets.routes';
import conservationsRouter from '../modules/conservations/routes/conservations.routes';
import birdsRouter from '../modules/birds/routes/birds.routes';
import birdsRegisterRouter from '../modules/birdsRegisters/routes/birdsRegisters.routes';

const routes = Router();

routes.use('/users', usersRouter);

routes.use('/sessions', sessionsRouter);

routes.use(authMiddleware);

routes.use('/profile', profileRouter);

routes.use('/diets', dietsRouter);
routes.use('/conservations', conservationsRouter);
routes.use('/birds', birdsRouter);
routes.use('/birds-registers', birdsRegisterRouter);

export default routes;
