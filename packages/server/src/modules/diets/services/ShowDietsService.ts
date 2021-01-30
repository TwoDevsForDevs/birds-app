import { getRepository } from 'typeorm';
import AppError from '../../../errors/AppError';

import Diet from '../entities/Diet';

interface IRequest {
  diet_id: string;
}

class ShowDietsService {
  async execute({ diet_id }: IRequest): Promise<Diet | undefined> {
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

    return diet;
  }
}

export default ShowDietsService;
