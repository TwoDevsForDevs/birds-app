import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';
import BirdRegister from '../entities/BirdRegister';
import Like from '../entities/Like';

interface IRequest {
  register_id: string;
  user_id: string;
}

class DeleteLikeBirdRegisterService {
  async execute({ register_id, user_id }: IRequest): Promise<void> {
    const birdRegisterRepository = getRepository(BirdRegister);
    const likeRepository = getRepository(Like);

    const register = await birdRegisterRepository.findOne({
      where: {
        id: register_id,
        status: true
      }
    });

    if (!register) {
      throw new AppError('Register not found.');
    }

    const like = await likeRepository.findOne({
      where: {
        register_id,
        user_id,
        status: true
      }
    });

    if (!like) {
      throw new AppError('Like not found.');
    }

    like.status = false;

    await likeRepository.save(like);
  }
}

export default DeleteLikeBirdRegisterService;
