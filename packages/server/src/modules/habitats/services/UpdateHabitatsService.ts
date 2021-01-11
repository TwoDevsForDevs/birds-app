import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';
import Habitat from '../entities/Habitat';

interface IRequest {
  habitat_id: string;
  name: string;
}

class UpdateHabitatsService {
  async execute({ habitat_id, name }: IRequest): Promise<Habitat> {
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

    habitat.name = name;

    await habitatRepository.save(habitat);

    return habitat;
  }
}

export default UpdateHabitatsService;
