import { getRepository } from 'typeorm';

import Conservation from '../entities/Conservation';

class ListConservationsService {
  async execute(): Promise<Conservation[]> {
    const conservationRepository = getRepository(Conservation);

    const conservations = conservationRepository.find({
      where: {
        status: true
      }
    });

    return conservations;
  }
}

export default ListConservationsService;
