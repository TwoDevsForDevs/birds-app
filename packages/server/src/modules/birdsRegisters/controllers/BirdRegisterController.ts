import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import CreateBirdRegisterService from '../services/CreateBirdRegisterService';
import ListBirdRegisterService from '../services/ListBirdRegisterService';

export default class BirdRegisterController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { bird_id, user_id } = request.query;

    const listBirdRegisterService = new ListBirdRegisterService();

    const registers = await listBirdRegisterService.execute({
      bird_id,
      user_id
    });

    return response.json(classToClass(registers));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { owner_id, bird_id, location, register_date, obs } = request.body;

    const createBirdRegisterService = new CreateBirdRegisterService();

    const register = await createBirdRegisterService.execute({
      owner_id,
      bird_id,
      image: request.file.filename || '',
      location,
      register_date,
      obs
    });

    return response.json(register);
  }
}
