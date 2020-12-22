import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import ListBirdsService from '../services/ListBirdsService';
import ShowBirdService from '../services/ShowBirdService';
import CreateBirdService from '../services/CreateBirdService';
import DeleteBirdService from '../services/DeleteBirdService';

export default class BirdController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { search = '' } = request.query as any;

    const listBirdsService = new ListBirdsService();

    const birds = await listBirdsService.execute({
      search
    });

    return response.json(classToClass(birds));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id: bird_id } = request.params;

    const showBirdService = new ShowBirdService();

    const bird = await showBirdService.execute({
      bird_id
    });

    return response.json(classToClass(bird));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      popular_name,
      scientific_name,
      conservation_id,
      habitat_id,
      diet_id,
      wikiaves_link
    } = request.body;

    const createBirdService = new CreateBirdService();

    const bird = await createBirdService.execute({
      popular_name,
      scientific_name,
      conservation_id,
      habitat_id,
      diet_id,
      image: request.file.filename || '',
      wikiaves_link
    });

    return response.json(bird);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id: bird_id } = request.params;

    const deleteBirdService = new DeleteBirdService();

    await deleteBirdService.execute({
      bird_id
    });

    return response.send();
  }
}
