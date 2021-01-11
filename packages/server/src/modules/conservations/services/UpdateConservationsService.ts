import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';
import Conservation from '../entities/Conservation';

interface IRequest {
  conservation_id: string;
  name: string;
}

class UpdateConservationsService {
  async execute({ conservation_id, name }: IRequest): Promise<Conservation> {
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

    conservation.name = name;

    await conservationRepository.save(conservation);

    return conservation;
  }
}

export default UpdateConservationsService;
