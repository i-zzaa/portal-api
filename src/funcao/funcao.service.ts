import { Injectable } from '@nestjs/common';
import { FuncaoServiceInterface } from './funcao.interface';

@Injectable()
export class FuncaoService implements FuncaoServiceInterface {
  createFuncao(): string {
    return 'service funcao';
  }
  updateFuncao(): string {
    return 'service funcao';
  }
  getFuncao(): string {
    return 'service funcao';
  }
  searchFuncao(): string {
    return 'service funcao';
  }
  deleteFuncao(): string {
    return 'service funcao';
  }
}
