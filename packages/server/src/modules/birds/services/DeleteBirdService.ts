import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';
import Bird from '../entities/Bird';

interface IRequest {
  bird_id: string;
}

class DeleteBirdService {
  async execute({ bird_id }: IRequest): Promise<void> {
    const birdRepository = getRepository(Bird);

    const bird = await birdRepository.findOne({
      where: {
        id: bird_id,
        status: true
      }
    });

    if (!bird) {
      throw new AppError('Bird not found.');
    }

    bird.status = false;

    await birdRepository.save(bird);
  }
}

export default DeleteBirdService;
