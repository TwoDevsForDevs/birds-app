import { getRepository } from 'typeorm';

import StorageProvider from '../../../providers/StorageProvider';
import Bird from '../entities/Bird';

interface Request {
  popular_name: string;
  scientific_name: string;
  conservation_id: string;
  habitat_id: string;
  diet_id: string;
  image?: string;
  wikiaves_link?: string;
}

class CreateBirdService {
  async execute({
    popular_name,
    scientific_name,
    conservation_id,
    habitat_id,
    diet_id,
    image,
    wikiaves_link
  }: Request): Promise<Bird> {
    const birdRepository = getRepository(Bird);
    const storageProvider = new StorageProvider();

    let filename = '';

    if (image) {
      filename = await storageProvider.saveFile(image);
    }

    const bird = birdRepository.create({
      popular_name,
      scientific_name,
      conservation_id,
      habitat_id,
      diet_id,
      image: filename,
      wikiaves_link
    });

    await birdRepository.save(bird);

    return bird;
  }
}

export default CreateBirdService;
