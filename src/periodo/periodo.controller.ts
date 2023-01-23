import { Controller, Get, Post, Put } from '@nestjs/common';
import { PeriodoService } from './periodo.service';

@Controller('periodo')
export class PeriodoController {
  constructor(private readonly periodoService: PeriodoService) {}

  @Get()
  get(): string {
    return this.periodoService.getPeriodo();
  }

  @Post()
  createUser(): string {
    return this.periodoService.createPeriodo();
  }

  @Put(':id')
  update(): string {
    return this.periodoService.updatePeriodo();
  }

  @Get()
  search(): string {
    return this.periodoService.updatePeriodo();
  }
}
