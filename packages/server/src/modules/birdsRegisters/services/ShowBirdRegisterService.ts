import { getRepository } from 'typeorm';

import BirdRegister from '../entities/BirdRegister';
import Like from '../entities/Like';

interface IRequest {
  register_id: string;
  user_id: string;
}

interface IResponse {
  register: BirdRegister | undefined;
  number_of_likes: number;
  user_has_like: boolean | undefined;
}

class ShowBirdRegisterService {
  async execute({ register_id, user_id }: IRequest): Promise<IResponse> {
    const birdRegisterRepository = getRepository(BirdRegister);
    const likeRepository = getRepository(Like);

    const userHasLike = await likeRepository.findOne({
      where: {
        register_id,
        user_id,
        status: true
      }
    });

    const [, numberOfLikes] = await likeRepository.findAndCount({
      where: {
        register_id,
        status: true
      }
    });

    const register = await birdRegisterRepository.findOne({
      where: {
        id: register_id,
        status: true
      },
      relations: ['owner']
    });

    return {
      register,
      number_of_likes: numberOfLikes,
      user_has_like: !!userHasLike
    };
  }
}

export default ShowBirdRegisterService;
