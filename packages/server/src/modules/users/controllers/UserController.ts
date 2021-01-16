import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import CreateUserService from '../services/CreateUserService';
import DeleteUserService from '../services/DeleteUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      password
    });

    return response.json(classToClass(user));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const deleteUserService = new DeleteUserService();

    await deleteUserService.execute({ id });

    return response.sendStatus(204);
  }
}
