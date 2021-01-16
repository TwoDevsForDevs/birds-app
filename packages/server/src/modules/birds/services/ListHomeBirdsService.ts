import { getRepository, getConnection } from 'typeorm';

import Bird from '../entities/Bird';
import BirdRegister from '../../birdsRegisters/entities/BirdRegister';

interface ListHomeBirds {
  popularBirds: Bird[];
  unidentifiedBirds: BirdRegister[];
}

class ListHomeBirdsService {
  async execute(): Promise<ListHomeBirds> {
    const birdRegisterRepository = getRepository(BirdRegister);

    const popularBirds = await getConnection()
      .createQueryBuilder()
      .from(Bird, 'bird')
      .select([
        'bird.id as id',
        'bird.popular_name as popular_name',
        'bird.scientific_name as scientific_name',
        'bird.image as image'
      ])
      .innerJoin('bird.registers', 'registers')
      .addSelect('SUM(registers.views) as views')
      .groupBy('bird.id')
      .orderBy('views', 'DESC')
      .limit(10)
      .getRawMany();

    const unidentifiedBirds = await birdRegisterRepository.find({
      where: {
        bird_id: null
      },
      take: 10
    });

    return {
      popularBirds,
      unidentifiedBirds
    };
  }
}

export default ListHomeBirdsService;
