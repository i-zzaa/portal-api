import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getVersion(): string {
    return this.appService.getVersion();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('network')
  getInterfaceNetwork() {
    return this.appService.getInterfaceNetwork();
  }
}
