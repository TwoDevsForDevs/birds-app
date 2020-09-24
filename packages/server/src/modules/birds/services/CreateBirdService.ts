import { getRepository } from 'typeorm';

import StorageProvider from '../../../providers/StorageProvider';
import Bird from '../entities/Bird';

const storageProvider = new StorageProvider();

interface Request {
  popular_name: string;
  scientific_name: string;
  conservation: string;
  habitat: string;
  diet: string;
  image?: string;
  wikiaves_link?: string;
}

class CreateBirdService {
  async execute({
    popular_name,
    scientific_name,
    conservation,
    habitat,
    diet,
    image,
    wikiaves_link
  }: Request): Promise<Bird> {
    const birdRepository = getRepository(Bird);

    let filename;

    if (image) {
      filename = await storageProvider.saveFile(image);
    }

    const bird = birdRepository.create({
      popular_name,
      scientific_name,
      conservation,
      habitat,
      diet,
      image: filename,
      wikiaves_link
    });

    await birdRepository.save(bird);

    return bird;
  }
}

export default CreateBirdService;
