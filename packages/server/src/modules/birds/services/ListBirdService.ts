import { getRepository } from 'typeorm';

import Bird from '../entities/Bird';

class CreateBirdService {
  async execute(): Promise<Bird[]> {
    const birdRepository = getRepository(Bird);

    const birds = birdRepository.find();

    return birds;
  }
}

export default CreateBirdService;
