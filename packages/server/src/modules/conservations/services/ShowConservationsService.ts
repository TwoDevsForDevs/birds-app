import { getRepository } from 'typeorm';
import AppError from '../../../errors/AppError';

import Conservation from '../entities/Conservation';

interface IRequest {
  conservation_id: string;
}

class ShowConservationsService {
  async execute({
    conservation_id
  }: IRequest): Promise<Conservation | undefined> {
    const conservationRepository = getRepository(Conservation);

    const conservation = await conservationRepository.findOne({
      where: {
        id: conservation_id,
        status: true
      }
    });

    if (!conservation) {
      throw new AppError('Conservation not found.');
    }

    return conservation;
  }
}

export default ShowConservationsService;
