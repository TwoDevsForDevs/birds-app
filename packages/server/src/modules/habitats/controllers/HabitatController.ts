import { Request, Response } from 'express';

import ListHabitatsService from '../services/ListHabitatsService';
import ShowHabitatsService from '../services/ShowHabitatsService';
import CreateHabitatsService from '../services/CreateHabitatsService';
import UpdateHabitatsService from '../services/UpdateHabitatsService';
import DeleteHabitatsService from '../services/DeleteHabitatsService';

export default class DietController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listHabitatsService = new ListHabitatsService();

    const habitats = await listHabitatsService.execute();

    return response.json(habitats);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id: habitat_id } = request.params;

    const showHabitatsService = new ShowHabitatsService();

    const bird = await showHabitatsService.execute({
      habitat_id
    });

    return response.json(bird);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createHabitatsService = new CreateHabitatsService();

    const habitat = await createHabitatsService.execute({
      name
    });

    return response.json(habitat);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id: habitat_id } = request.params;
    const { name } = request.body;

    const updateHabitatsService = new UpdateHabitatsService();

    const habitat = await updateHabitatsService.execute({
      habitat_id,
      name
    });

    return response.json(habitat);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id: habitat_id } = request.params;

    const deleteHabitatsService = new DeleteHabitatsService();

    await deleteHabitatsService.execute({
      habitat_id
    });

    return response.send();
  }
}
