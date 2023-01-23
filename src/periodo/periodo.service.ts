import { Injectable } from '@nestjs/common';
import { PeriodoServiceInterface } from './periodo.interface';

@Injectable()
export class PeriodoService implements PeriodoServiceInterface {
  createPeriodo(): string {
    return 'service periodo';
  }
  updatePeriodo(): string {
    return 'service periodo';
  }
  getPeriodo(): string {
    return 'service periodo';
  }
  searchPeriodo(): string {
    return 'service periodo';
  }
}
