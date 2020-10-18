import { Router } from 'express';
import { classToClass } from 'class-transformer';

import AuthenticationService from '../services/AuthenticationService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authentication = new AuthenticationService();

  const { user, token } = await authentication.execute({
    email,
    password
  });

  return response.json({
    user: classToClass(user),
    token
  });
});

export default sessionsRouter;
