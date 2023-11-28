import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AutheticatedGuard } from './auth/autheticated.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getVersion(): string {
    return this.appService.getVersion();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('network')
  @UseGuards(AutheticatedGuard)
  getInterfaceNetwork() {
    return this.appService.getInterfaceNetwork();
  }
}
