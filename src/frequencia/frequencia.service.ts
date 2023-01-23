import { Injectable } from '@nestjs/common';
import { FrequenciaServiceInterface } from './frequencia.interface';

@Injectable()
export class FrequenciaService implements FrequenciaServiceInterface {
  createFrequencia(): string {
    return 'service frequencia';
  }
  updateFrequencia(): string {
    return 'service frequencia';
  }
  getFrequencia(): string {
    return 'service frequencia';
  }
  searchFrequencia(): string {
    return 'service frequencia';
  }
  deleteFrequencia(): string {
    return 'service frequencia';
  }
}
