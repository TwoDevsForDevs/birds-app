import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import CreateBirdService from '../services/CreateBirdService';
import ListBirdsService from '../services/ListBirdsService';

export default class BirdController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listBirdsService = new ListBirdsService();

    const birds = await listBirdsService.execute();

    return response.json(classToClass(birds));
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
