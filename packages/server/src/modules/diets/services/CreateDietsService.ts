import { getRepository } from 'typeorm';

import Diet from '../entities/Diet';

interface Request {
  name: string;
}

class CreateDietsService {
  async execute({ name }: Request): Promise<Diet> {
    const dietRepository = getRepository(Diet);

    const diet = dietRepository.create({
      name
    });

    await dietRepository.save(diet);

    return diet;
  }
}

export default CreateDietsService;
