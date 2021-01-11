import { getRepository } from 'typeorm';

import Habitat from '../entities/Habitat';

class ListHabitatsService {
  async execute(): Promise<Habitat[]> {
    const habitatRepository = getRepository(Habitat);

    const habitats = habitatRepository.find({
      where: {
        status: true
      }
    });

    return habitats;
  }
}

export default ListHabitatsService;
