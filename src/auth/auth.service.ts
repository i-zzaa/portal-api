import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Auth } from 'src/api/Api';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(user: any) {
    const payload = {
      sub: user.ID,
      username: user.UserLogin,
      id: user.ID,
    };

    return {
      token: this.jwtService.sign(payload),
      user: {
        username: user.first_name,
        id: user.ID,
        login: user.UserLogin,
      },
    };
  }

  async validateUser(username: string, password: string): Promise<any> {
    try {
      const { data }: any = await Auth().post('auth/login', {
        User: username,
        Password: password,
      });

      if (Boolean(data.Me)) {
        return data.Me;
      }
    } catch (error) {
      return null;
    }
  }
}
