import { Injectable } from '@nestjs/common';
import { EventoServiceInterface } from './evento.interface';

@Injectable()
export class EventoService implements EventoServiceInterface {
  getFilter(): string {
    return 'service evento';
  }
  createEvento(): string {
    return 'service evento';
  }
  updateEvento(): string {
    return 'service evento';
  }
  getEvento(): string {
    return 'service evento';
  }
}
