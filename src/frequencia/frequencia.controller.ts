import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { FrequenciaService } from './frequencia.service';

@Controller('frequencia')
export class FrequenciaController {
  constructor(private readonly frequenciaService: FrequenciaService) {}

  @Get()
  get(): string {
    return this.frequenciaService.getFrequencia();
  }

  @Post()
  createUser(): string {
    return this.frequenciaService.createFrequencia();
  }

  @Put(':id')
  update(): string {
    return this.frequenciaService.updateFrequencia();
  }

  @Delete()
  delete(): string {
    return this.frequenciaService.deleteFrequencia();
  }

  @Get()
  search(): string {
    return this.frequenciaService.updateFrequencia();
  }
}
