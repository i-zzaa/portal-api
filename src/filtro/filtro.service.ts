import { Injectable } from '@nestjs/common';
import { FiltroServiceInterface } from './filtro.interface';

@Injectable()
export class FiltroService implements FiltroServiceInterface {
  filter(): string {
    return 'service filtro';
  }
  dropdown(): string {
    return 'service filtro';
  }
}
