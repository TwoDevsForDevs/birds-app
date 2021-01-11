import { getRepository, Raw } from 'typeorm';

import BirdRegister from '../entities/BirdRegister';

interface IRequest {
  bird_id: any;
  user_id: any;
  search: any;
}

class ListBirdRegisterService {
  async execute({
    bird_id,
    user_id,
    search
  }: IRequest): Promise<BirdRegister[]> {
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

    const registerWhere = {
      status: true,
      approved: true
    };

    if (search !== '') {
      Object.assign(registerWhere, {
        bird: [
          {
            popular_name: Raw(alias => `${alias} ILIKE '%${search}%'`),
            status: true
          },
          {
            scientific_name: Raw(alias => `${alias} ILIKE '%${search}%'`),
            status: true
          }
        ]
      });
    }

    registers = birdRegisterRepository.find({
      where: registerWhere,
      relations: ['bird', 'owner']
    });

    return registers;
  }
}

export default ListBirdRegisterService;
