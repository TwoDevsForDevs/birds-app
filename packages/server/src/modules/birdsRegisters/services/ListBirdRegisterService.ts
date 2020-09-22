import { getRepository } from 'typeorm';

import BirdRegister from '../entities/BirdRegister';

class ListBirdRegisterService {
  async execute(): Promise<BirdRegister[]> {
    const birdRegisterRepository = getRepository(BirdRegister);

    const registers = birdRegisterRepository.find();

    return registers;
  }
}

export default ListBirdRegisterService;
