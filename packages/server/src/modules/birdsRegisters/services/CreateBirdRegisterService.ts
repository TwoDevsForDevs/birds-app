import { getRepository } from 'typeorm';

import StorageProvider from '../../../providers/StorageProvider';
import BirdRegister from '../entities/BirdRegister';

const storageProvider = new StorageProvider();

interface Request {
  owner_id: string;
  bird_id: string;
  image: string;
  location: string;
  register_date: Date;
  obs?: string;
}

class CreateBirdRegisterService {
  async execute({
    owner_id,
    bird_id,
    image,
    location,
    register_date,
    obs
  }: Request): Promise<BirdRegister> {
    const birdRegisterRepository = getRepository(BirdRegister);

    const filename = await storageProvider.saveFile(image);

    const register = birdRegisterRepository.create({
      owner_id,
      bird_id,
      image: filename,
      location,
      register_date,
      obs
    });

    await birdRegisterRepository.save(register);

    return register;
  }
}

export default CreateBirdRegisterService;
