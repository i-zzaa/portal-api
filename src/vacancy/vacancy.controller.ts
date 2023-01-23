import { Controller, Get, Put } from '@nestjs/common';
import { VacancyService } from './vacancy.service';

@Controller('vagas')
export class VacancyController {
  constructor(private readonly vacancyService: VacancyService) {}

  @Put('agendar')
  update(): string {
    return this.vacancyService.updateVaga();
  }

  @Put('agendar/especialidade')
  updateEspecialidadeVaga(): string {
    return this.vacancyService.updateEspecialidadeVaga();
  }

  @Put('dashboard/:type')
  dashboard(): string {
    const req = {
      params: {
        type: 'tipoSessoes',
      },
    };

    switch (req.params.type) {
      case 'tipoSessoes':
        return this.vacancyService.tipoSessoesVaga();
      case 'especialidades':
        return this.vacancyService.especialidadesVaga();
      case 'status':
        return this.vacancyService.statusVaga();
    }
  }

  @Get('wait')
  wait(): string {
    return this.vacancyService.esperaVaga();
  }

  @Get('return')
  returnTrend(): string {
    return this.vacancyService.returnVaga();
  }

  @Put('devolutiva')
  updateReturn(): string {
    return this.vacancyService.updateReturn();
  }
}
