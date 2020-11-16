import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';
import BirdRegister from '../entities/BirdRegister';
import Like from '../entities/Like';

interface IRequest {
  register_id: string;
  user_id: string;
}

class CreateLikeBirdRegisterService {
  async execute({ register_id, user_id }: IRequest): Promise<Like | undefined> {
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

    const userHasLike = await likeRepository.findOne({
      where: {
        register_id,
        user_id,
        status: true
      }
    });

    if (userHasLike) {
      throw new AppError('User already has like this bird register');
    }

    const like = likeRepository.create({
      register_id,
      user_id
    });

    like.status = true;

    await likeRepository.save(like);

    return like;
  }
}

export default CreateLikeBirdRegisterService;
