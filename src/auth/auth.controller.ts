import { Controller, UseGuards, Post, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req: any) {
    req.session.SessionID = req.user.SessionID;
    req.session.ChallengeToken = req.user.ChallengeToken;

    console.log('login', req.session);

    // delete req.user.SessionID;
    // delete req.user.ChallengeToken;

    return await this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('logout')
  async logout(@Request() req: any) {
    return await this.authService.logout(
      req.session.SessionID,
      req.session.ChallengeToken,
    );
  }
}
