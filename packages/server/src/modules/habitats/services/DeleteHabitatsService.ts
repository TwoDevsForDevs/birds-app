import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';
import Habitat from '../entities/Habitat';

interface IRequest {
  habitat_id: string;
}

class DeleteHabitatsService {
  async execute({ habitat_id }: IRequest): Promise<void> {
    const habitatRepository = getRepository(Habitat);

    const habitat = await habitatRepository.findOne({
      where: {
        id: habitat_id,
        status: true
      }
    });

    if (!habitat) {
      throw new AppError('Habitat not found.');
    }

    habitat.status = false;

    await habitatRepository.save(habitat);
  }
}

export default DeleteHabitatsService;
