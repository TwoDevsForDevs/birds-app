import { getRepository } from 'typeorm';
import { hash, compare } from 'bcryptjs';

import AppError from '../../../errors/AppError';

import User from '../entities/User';

interface Request {
  user_id: string;
  name: string;
  email: string;
  old_password?: string;
  new_password?: string;
}

class UpdateProfileService {
  async execute({
    user_id,
    name,
    email,
    old_password,
    new_password
  }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({
      where: { id: user_id }
    });

    if (!user) {
      throw new AppError('User not found.');
    }

    const userWithUpdatedEmail = await userRepository.findOne({
      where: { email }
    });

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user_id) {
      throw new AppError('E-mail já está em uso.');
    }

    user.name = name;
    user.email = email;

    if (new_password && !old_password) {
      throw new AppError(
        'Voce precisa informar a senha antiga para alterar a senha.'
      );
    }

    if (new_password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if (!checkOldPassword) {
        throw new AppError('Senha antiga incorreta.');
      }

      user.password = await hash(new_password, 8);
    }

    return userRepository.save(user);
  }
}

export default UpdateProfileService;
