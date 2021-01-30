import { getRepository } from 'typeorm';

import Conservation from '../entities/Conservation';

interface Request {
  name: string;
}

class CreateConservationsService {
  async execute({ name }: Request): Promise<Conservation> {
    const conservationRepository = getRepository(Conservation);

    const conservation = conservationRepository.create({
      name
    });

    await conservationRepository.save(conservation);

    return conservation;
  }
}

export default CreateConservationsService;
