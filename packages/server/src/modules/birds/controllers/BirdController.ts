import { Request, Response } from 'express';

import CreateBirdService from '../services/CreateBirdService';
import ListBirdService from '../services/ListBirdService';

export default class BirdController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listBirdService = new ListBirdService();

    const birds = await listBirdService.execute();

    return response.json(birds);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      popular_name,
      scientific_name,
      conservation,
      habitat,
      diet,
      wikiaves_link
    } = request.body;

    const createBirdService = new CreateBirdService();

    const bird = await createBirdService.execute({
      popular_name,
      scientific_name,
      conservation,
      habitat,
      diet,
      image: request.file.filename || '',
      wikiaves_link
    });

    return response.json(bird);
  }
}
