import { getRepository } from 'typeorm';
import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const findUser = await userRepository.findOne({
      where: email
    });

    if (findUser) {
      throw new Error('Email address already used.');
    }

    const user = userRepository.create({
      name,
      email,
      password
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
