import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';
import BirdRegister from '../entities/BirdRegister';

interface IRequest {
  register_id: string;
}

class ViewBirdRegisterService {
  async execute({ register_id }: IRequest): Promise<BirdRegister | undefined> {
    const birdRegisterRepository = getRepository(BirdRegister);

    const register = await birdRegisterRepository.findOne({
      where: {
        id: register_id,
        status: true
      }
    });

    if (!register) {
      throw new AppError('Register not found.');
    }

    register.views += 1;

    return birdRegisterRepository.save(register);
  }
}

export default ViewBirdRegisterService;
