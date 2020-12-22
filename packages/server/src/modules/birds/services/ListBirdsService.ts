import { getRepository, Like } from 'typeorm';

import Bird from '../entities/Bird';

interface Request {
  search: string;
}

class ListBirdsService {
  async execute({ search }: Request): Promise<Bird[]> {
    const birdRepository = getRepository(Bird);

    const birds = birdRepository.find({
      where: [
        {
          popular_name: Like(`%${search}%`),
          status: true
        },
        {
          scientific_name: Like(`%${search}%`),
          status: true
        }
      ],
      relations: ['conservation', 'habitat', 'diet']
    });

    return birds;
  }
}

export default ListBirdsService;
