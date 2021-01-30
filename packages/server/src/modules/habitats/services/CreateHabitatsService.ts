import { getRepository } from 'typeorm';

import Habitat from '../entities/Habitat';

interface Request {
  name: string;
}

class CreateHabitatsService {
  async execute({ name }: Request): Promise<Habitat> {
    const habitatRepository = getRepository(Habitat);

    const habitat = habitatRepository.create({
      name
    });

    await habitatRepository.save(habitat);

    return habitat;
  }
}

export default CreateHabitatsService;
