import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';
import Diet from '../entities/Diet';

interface IRequest {
  diet_id: string;
}

class DeleteDietsService {
  async execute({ diet_id }: IRequest): Promise<void> {
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

    diet.status = false;

    await dietRepository.save(diet);
  }
}

export default DeleteDietsService;
