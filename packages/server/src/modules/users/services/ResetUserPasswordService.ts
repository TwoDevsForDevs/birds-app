import { getRepository } from 'typeorm';
import { hash, compare } from 'bcryptjs';

import AppError from '../../../errors/AppError';

import User from '../entities/User';

interface Request {
  email: string;
  old_password: string;
  new_password: string;
}

class ResetUserPasswordService {
  async execute({ email, old_password, new_password }: Request): Promise<void> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({
      where: { email }
    });

    if (!user) {
      throw new AppError('Este e-mail não está cadastrado.');
    }

    const checkOldPassword = await compare(old_password, user.password);

    if (!checkOldPassword) {
      throw new AppError('Senha antiga incorreta.');
    }

    user.password = await hash(new_password, 8);

    userRepository.save(user);
  }
}

export default ResetUserPasswordService;
