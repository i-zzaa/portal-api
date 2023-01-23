import { Controller, Get, Post, Put } from '@nestjs/common';
import { StatusEventosService } from './statusEventos.service';

@Controller('statusEventos')
export class StatusEventosController {
  constructor(private readonly statuseventosService: StatusEventosService) {}

  @Get()
  get(): string {
    return this.statuseventosService.getStatusEventos();
  }

  @Post()
  createUser(): string {
    return this.statuseventosService.createStatusEventos();
  }

  @Put(':id')
  update(): string {
    return this.statuseventosService.updateStatusEventos();
  }

  @Get()
  search(): string {
    return this.statuseventosService.updateStatusEventos();
  }
}
