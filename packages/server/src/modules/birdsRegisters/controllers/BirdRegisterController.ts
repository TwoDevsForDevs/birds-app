import { Request, Response } from 'express';

import CreateBirdRegisterService from '../services/CreateBirdRegisterService';
import ListBirdRegisterService from '../services/ListBirdRegisterService';

export default class BirdRegisterController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listBirdRegisterService = new ListBirdRegisterService();

    const registers = await listBirdRegisterService.execute();

    return response.json(registers);
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
