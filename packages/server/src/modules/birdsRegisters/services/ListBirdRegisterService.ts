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
        },
        relations: ['owner']
      });

      return registers;
    }

    if (user_id) {
      registers = birdRegisterRepository.find({
        where: {
          status: true,
          owner_id: user_id
        },
        relations: ['owner']
      });

      return registers;
    }

    registers = birdRegisterRepository.find({
      where: {
        status: true
      },
      relations: ['owner']
    });

    return registers;
  }
}

export default ListBirdRegisterService;
