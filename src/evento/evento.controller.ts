import { Controller, Get, Post, Put } from '@nestjs/common';
import { EventoService } from './evento.service';

@Controller('evento')
export class EventoController {
  constructor(private readonly eventoService: EventoService) {}

  @Get('mes/:mes/:ano')
  getMonth(): string {
    return this.eventoService.getEvento();
  }

  @Get('filter/:mes/:ano')
  getFilter(): string {
    return this.eventoService.getFilter();
  }

  @Post()
  createUser(): string {
    return this.eventoService.createEvento();
  }

  @Put(':id')
  update(): string {
    return this.eventoService.updateEvento();
  }
}
