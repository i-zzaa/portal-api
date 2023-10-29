import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Auth } from 'src/api/api';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login({ user, SessionID, ChallengeToken }: any) {
    const payload = {
      sub: user.ID,
      username: user.UserLogin,
      id: user.ID,
      session: {
        ChallengeToken,
        SessionID,
      },
    };

    return {
      token: this.jwtService.sign(payload),
      user: {
        username: user.FirstName,
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

      if (
        Boolean(data.Me) &&
        Boolean(data.SessionValue) &&
        Boolean(data.ChallengeToken)
      ) {
        return {
          user: data.Me,
          SessionID: data.SessionValue,
          ChallengeToken: data.ChallengeToken,
        };
      }
    } catch (error) {
      return null;
    }
  }

  async logout(SessionID: string, ChallengeToken: string) {
    try {
      await Auth().post('auth/logout', {
        SessionID,
        ChallengeToken,
      });
    } catch (error) {
      return null;
    }
  }
}
