import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';
import Conservation from '../entities/Conservation';

interface IRequest {
  conservation_id: string;
}

class DeleteConservationsService {
  async execute({ conservation_id }: IRequest): Promise<void> {
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

    conservation.status = false;

    await conservationRepository.save(conservation);
  }
}

export default DeleteConservationsService;
