import { getRepository } from 'typeorm';

import BirdRegister from '../entities/BirdRegister';

interface IRequest {
  bird_id: any;
  user_id: any;
}

class ListBirdRegisterService {
  async execute({ bird_id, user_id }: IRequest): Promise<BirdRegister[]> {
    const birdRegisterRepository = getRepository(BirdRegister);

    let registers;

    if (bird_id) {
      registers = birdRegisterRepository.find({
        where: {
          status: true,
          bird_id
        }
      });

      return registers;
    }

    if (user_id) {
      registers = birdRegisterRepository.find({
        where: {
          status: true,
          owner_id: user_id
        }
      });

      return registers;
    }

    registers = birdRegisterRepository.find({
      where: {
        status: true
      }
    });

    return registers;
  }
}

export default ListBirdRegisterService;
