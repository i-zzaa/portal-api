import { Injectable } from '@nestjs/common';
import { TipoSessaoServiceInterface } from './tipo-sessao.interface';

@Injectable()
export class TipoSessaoService implements TipoSessaoServiceInterface {
  createTipoSessao(): string {
    return 'service tipop sessao';
  }
  updateTipoSessao(): string {
    return 'service tipop sessao';
  }
  getTipoSessao(): string {
    return 'service tipop sessao';
  }
  searchTipoSessao(): string {
    return 'service tipop sessao';
  }
}
