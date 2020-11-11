import { Request, Response } from 'express';

import CreateLikeBirdRegisterService from '../services/CreateLikeBirdRegisterService';
import DeleteLikeBirdRegisterService from '../services/DeleteLikeBirdRegisterService';

export default class BirdRegisterLikesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { register_id } = request.body;

    const createLikeBirdRegisterService = new CreateLikeBirdRegisterService();

    const like = await createLikeBirdRegisterService.execute({
      register_id,
      user_id
    });

    return response.json(like);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { id: register_id } = request.params;

    const deleteLikeBirdRegisterService = new DeleteLikeBirdRegisterService();

    const like = await deleteLikeBirdRegisterService.execute({
      register_id,
      user_id
    });

    return response.json(like);
  }
}
