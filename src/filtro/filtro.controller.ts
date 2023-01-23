import { Controller, Get } from '@nestjs/common';
import { FiltroService } from './filtro.service';

@Controller()
export class FiltroController {
  constructor(private readonly filtroService: FiltroService) {}

  @Get('filtro')
  get(): string {
    return this.filtroService.filter();
  }

  @Get('dropdown')
  search(): string {
    return this.filtroService.dropdown();
  }
}
