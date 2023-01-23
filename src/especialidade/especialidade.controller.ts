import { Controller, Get, Post, Put } from '@nestjs/common';
import { EspecialidadeService } from './especialidade.service';

@Controller('especialidade')
export class EspecialidadeController {
  constructor(private readonly especialidadeService: EspecialidadeService) {}

  @Get()
  get(): string {
    return this.especialidadeService.getEspecialidade();
  }

  @Post()
  createUser(): string {
    return this.especialidadeService.createEspecialidade();
  }

  @Put(':id')
  update(): string {
    return this.especialidadeService.updateEspecialidade();
  }

  @Get()
  search(): string {
    return this.especialidadeService.updateEspecialidade();
  }
}
