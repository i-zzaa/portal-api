import { Injectable } from '@nestjs/common';
import { AuthServiceInterface } from './auth.interface';

@Injectable()
export class AuthService implements AuthServiceInterface {
  loginService(): string {
    return 'service auth';
  }
}
