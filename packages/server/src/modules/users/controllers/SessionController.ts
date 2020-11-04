import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import AuthenticationService from '../services/AuthenticationService';

export default class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticationService = new AuthenticationService();

    const { user, token } = await authenticationService.execute({
      email,
      password
    });

    return response.json({ user: classToClass(user), token });
  }
}
