/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { VacancyServiceInterface } from './vacancy.interface';

@Injectable()
export class VacancyService implements VacancyServiceInterface {
  updateVaga(): string {
    return 'service vaga';
  }
  updateEspecialidadeVaga(): string {
    return 'service vaga';
  }
  tipoSessoesVaga(): string {
    return 'service vaga';
  }
  especialidadesVaga(): string {
    return 'service vaga';
  }
  statusVaga(): string {
    return 'service vaga';
  }
  esperaVaga(): string {
    return 'service vaga';
  }
  returnVaga(): string {
    return 'service vaga';
  }
  updateReturn(): string {
    return 'service vaga';
  }
}
