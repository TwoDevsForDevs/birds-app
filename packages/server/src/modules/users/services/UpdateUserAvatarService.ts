import { getRepository } from 'typeorm';

import StorageProvider from '../../../providers/StorageProvider';

import AppError from '../../../errors/AppError';

import User from '../entities/User';

interface Request {
  user_id: string;
  avatar_filename: string;
}

class UpdateUserAvatarService {
  async execute({ user_id, avatar_filename }: Request): Promise<User> {
    const userRepository = getRepository(User);
    const storageProvider = new StorageProvider();

    const user = await userRepository.findOne({
      where: { id: user_id }
    });

    if (!user) {
      throw new AppError('User not found.');
    }

    if (user.avatar) {
      await storageProvider.deleteFile(user.avatar);
    }

    const filename = await storageProvider.saveFile(avatar_filename);

    user.avatar = filename;

    return userRepository.save(user);
  }
}

export default UpdateUserAvatarService;
