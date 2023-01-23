import { Injectable } from '@nestjs/common';
import { EspecialidadeServiceInterface } from './especialidade.interface';

@Injectable()
export class EspecialidadeService implements EspecialidadeServiceInterface {
  createEspecialidade(): string {
    return 'service especialidade';
  }
  updateEspecialidade(): string {
    return 'service especialidade';
  }
  getEspecialidade(): string {
    return 'service especialidade';
  }
  searchEspecialidade(): string {
    return 'service especialidade';
  }
}
