import { Controller, Get } from '@nestjs/common';
import { FinanceiroService } from './financeiro.service';

@Controller('financeiro')
export class FinanceiroController {
  constructor(private readonly financeiroService: FinanceiroService) {}

  @Get('terapeuta')
  getTerapeuta(): string {
    return this.financeiroService.getFinancial();
  }

  @Get('paciente')
  getPaciente(): string {
    return this.financeiroService.getFinancialPaciente();
  }
}
