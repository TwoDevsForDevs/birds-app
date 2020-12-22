import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';
import Diet from '../entities/Diet';

interface IRequest {
  diet_id: string;
  name: string;
}

class UpdateDietsService {
  async execute({ diet_id, name }: IRequest): Promise<Diet> {
    const dietRepository = getRepository(Diet);

    const diet = await dietRepository.findOne({
      where: {
        id: diet_id,
        status: true
      }
    });

    if (!diet) {
      throw new AppError('Diet not found.');
    }

    diet.name = name;

    await dietRepository.save(diet);

    return diet;
  }
}

export default UpdateDietsService;
