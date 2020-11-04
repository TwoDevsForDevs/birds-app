import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import UpdateProfileService from '../services/UpdateProfileService';

export default class ProfileController {
  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { name, email, old_password, new_password } = request.body;

    const updateProfileService = new UpdateProfileService();

    const user = await updateProfileService.execute({
      user_id,
      name,
      email,
      old_password,
      new_password
    });

    return response.json(classToClass(user));
  }
}
