import { Request, Response } from 'express';

import ResetUserPasswordService from '../services/ResetUserPasswordService';

export default class ResetUserPasswordController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { email, old_password, new_password } = request.body;

    const resetUserPasswordService = new ResetUserPasswordService();

    await resetUserPasswordService.execute({
      email,
      old_password,
      new_password
    });

    return response.sendStatus(204);
  }
}
