import { Router } from 'express';

import AuthenticationService from '../services/AuthenticationService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authentication = new AuthenticationService();

    const { user, token } = await authentication.execute({
      email,
      password
    });

    return response.json({
      user,
      token
    });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;
