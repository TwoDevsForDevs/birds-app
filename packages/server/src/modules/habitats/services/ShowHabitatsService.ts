import { getRepository } from 'typeorm';
import AppError from '../../../errors/AppError';

import Habitat from '../entities/Habitat';

interface IRequest {
  habitat_id: string;
}

class ShowHabitatsService {
  async execute({ habitat_id }: IRequest): Promise<Habitat | undefined> {
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

    return habitat;
  }
}

export default ShowHabitatsService;
