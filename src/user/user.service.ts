import { Injectable } from '@nestjs/common';
import { UserServiceInterface } from './user.interface';

@Injectable()
export class UserService implements UserServiceInterface {
  getUsers(): string {
    return 'passando!';
  }

  createUser(): string {
    return 'passando!';
  }

  getTerapeuta(): string {
    return 'passando!';
  }

  updateUser(): string {
    return 'passando!';
  }

  updatePassword(): string {
    return 'passando!';
  }

  updatePasswordLogin(): string {
    return 'passando!';
  }

  searchUsers(): string {
    return 'passando!';
  }
}
