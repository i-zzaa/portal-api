import { Controller, Get, Post, Put } from '@nestjs/common';
import { StatusService } from './status.service';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  get(): string {
    return this.statusService.getStatus();
  }

  @Post()
  createUser(): string {
    return this.statusService.createStatus();
  }

  @Put(':id')
  update(): string {
    return this.statusService.updateStatus();
  }

  @Get()
  search(): string {
    return this.statusService.updateStatus();
  }
}
