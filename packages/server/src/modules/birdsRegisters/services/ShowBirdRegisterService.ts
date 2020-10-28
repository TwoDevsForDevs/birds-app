import { getRepository } from 'typeorm';

import BirdRegister from '../entities/BirdRegister';

interface IRequest {
  register_id: string;
}

class ShowBirdRegisterService {
  async execute({ register_id }: IRequest): Promise<BirdRegister | undefined> {
    const birdRegisterRepository = getRepository(BirdRegister);

    const register = birdRegisterRepository.findOne({
      where: {
        id: register_id,
        status: true
      }
    });

    return register;
  }
}

export default ShowBirdRegisterService;
