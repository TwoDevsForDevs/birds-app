import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';

import User from '../entities/User';

interface Request {
  id: string;
}

class DeleteUserService {
  async execute({ id }: Request): Promise<void> {
    const userRepository = getRepository(User);

    const findUser = await userRepository.findOne({
      where: { id }
    });

    if (!findUser) {
      throw new AppError('Usuário não encontrado!');
    }

    await userRepository.delete({ id });
  }
}

export default DeleteUserService;
