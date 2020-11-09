import { Request, Response } from 'express';

import ViewBirdRegisterService from '../services/ViewBirdRegisterService';

export default class BirdRegisterViewsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { register_id } = request.body;

    const viewBirdRegisterService = new ViewBirdRegisterService();

    const register = await viewBirdRegisterService.execute({
      register_id
    });

    return response.json(register);
  }
}
