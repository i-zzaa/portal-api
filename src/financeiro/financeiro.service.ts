import { Injectable } from '@nestjs/common';
import { FinanceiroServiceInterface } from './financeiro.interface';

@Injectable()
export class FinanceiroService implements FinanceiroServiceInterface {
  getFinancial(): string {
    return 'service financeiro';
  }
  getFinancialPaciente(): string {
    return 'service financeiro';
  }
}
