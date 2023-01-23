import { Injectable } from '@nestjs/common';
import { StatusEventosServiceInterface } from './statusEventos.interface';

@Injectable()
export class StatusEventosService implements StatusEventosServiceInterface {
  createStatusEventos(): string {
    return 'service statuseventos';
  }
  updateStatusEventos(): string {
    return 'service statuseventos';
  }
  getStatusEventos(): string {
    return 'service statuseventos';
  }
  searchStatusEventos(): string {
    return 'service statuseventos';
  }
}
