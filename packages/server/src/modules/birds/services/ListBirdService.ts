import { getRepository } from 'typeorm';

import Bird from '../entities/Bird';

class CreateBirdService {
  async execute(): Promise<Bird[]> {
    const birdRepository = getRepository(Bird);

    const birds = birdRepository.find({
      where: {
        status: true
      }
    });

    return birds;
  }
}

export default CreateBirdService;
