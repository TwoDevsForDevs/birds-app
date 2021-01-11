import { Request, Response } from 'express';

import ListConservationsService from '../services/ListConservationsService';
import ShowConservationsService from '../services/ShowConservationsService';
import CreateConservationsService from '../services/CreateConservationsService';
import UpdateConservationsService from '../services/UpdateConservationsService';
import DeleteConservationsService from '../services/DeleteConservationsService';

export default class DietController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listConservationsService = new ListConservationsService();

    const conservations = await listConservationsService.execute();

    return response.json(conservations);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id: conservation_id } = request.params;

    const showConservationService = new ShowConservationsService();

    const conservation = await showConservationService.execute({
      conservation_id
    });

    return response.json(conservation);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createConservationService = new CreateConservationsService();

    const conservation = await createConservationService.execute({
      name
    });

    return response.json(conservation);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id: conservation_id } = request.params;
    const { name } = request.body;

    const updateConservationsService = new UpdateConservationsService();

    const conservation = await updateConservationsService.execute({
      conservation_id,
      name
    });

    return response.json(conservation);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id: conservation_id } = request.params;

    const deleteConservationsService = new DeleteConservationsService();

    await deleteConservationsService.execute({
      conservation_id
    });

    return response.send();
  }
}
