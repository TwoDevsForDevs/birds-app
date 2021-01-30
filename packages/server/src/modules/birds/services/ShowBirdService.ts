import { getRepository } from 'typeorm';

import Bird from '../entities/Bird';

interface IRequest {
  bird_id: string;
}

class ShowBirdService {
  async execute({ bird_id }: IRequest): Promise<Bird | undefined> {
    const birdRepository = getRepository(Bird);

    const bird = await birdRepository.findOne({
      where: {
        id: bird_id,
        status: true
      },
      relations: ['conservation', 'habitat', 'diet']
    });

    return bird;
  }
}

export default ShowBirdService;
