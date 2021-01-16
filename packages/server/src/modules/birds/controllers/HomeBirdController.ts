import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import ListHomeBirdsService from '../services/ListHomeBirdsService';

export default class HomeBirdController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listHomeBirdsService = new ListHomeBirdsService();

    const {
      popularBirds,
      unidentifiedBirds
    } = await listHomeBirdsService.execute();

    return response.json(
      classToClass({
        popularBirds,
        unidentifiedBirds
      })
    );
  }
}
