import { getRepository } from 'typeorm';

import Diet from '../entities/Diet';

class ListDietsService {
  async execute(): Promise<Diet[]> {
    const dietRepository = getRepository(Diet);

    const diets = dietRepository.find({
      where: {
        status: true
      }
    });

    return diets;
  }
}

export default ListDietsService;
