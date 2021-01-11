import { Request, Response } from 'express';

import ListDietsService from '../services/ListDietsService';
import ShowDietsService from '../services/ShowDietsService';
import CreateDietsService from '../services/CreateDietsService';
import UpdateDietsService from '../services/UpdateDietsService';
import DeleteDietsService from '../services/DeleteDietsService';

export default class DietController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listDietsService = new ListDietsService();

    const diets = await listDietsService.execute();

    return response.json(diets);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id: diet_id } = request.params;

    const showDietService = new ShowDietsService();

    const bird = await showDietService.execute({
      diet_id
    });

    return response.json(bird);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createDietService = new CreateDietsService();

    const diet = await createDietService.execute({
      name
    });

    return response.json(diet);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id: diet_id } = request.params;
    const { name } = request.body;

    const updateDietService = new UpdateDietsService();

    const diet = await updateDietService.execute({
      diet_id,
      name
    });

    return response.json(diet);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id: diet_id } = request.params;

    const deleteDietService = new DeleteDietsService();

    await deleteDietService.execute({
      diet_id
    });

    return response.send();
  }
}
