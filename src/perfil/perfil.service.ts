import { Injectable } from '@nestjs/common';
import { PerfilServiceInterface } from './perfil.interface';

@Injectable()
export class PerfilService implements PerfilServiceInterface {
  createPerfil(): string {
    return 'service perfil';
  }
  updatePerfil(): string {
    return 'service perfil';
  }
  getPerfil(): string {
    return 'service perfil';
  }
  searchPerfil(): string {
    return 'service perfil';
  }
}
