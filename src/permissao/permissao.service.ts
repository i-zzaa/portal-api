import { Injectable } from '@nestjs/common';
import { PermissaoServiceInterface } from './permissao.interface';

@Injectable()
export class PermissaoService implements PermissaoServiceInterface {
  createPermissao(): string {
    return 'service permissao';
  }
  updatePermissao(): string {
    return 'service permissao';
  }
  getPermissao(): string {
    return 'service permissao';
  }
  searchPermissao(): string {
    return 'service permissao';
  }
  deletePermissao(): string {
    return 'service permissao';
  }
}
