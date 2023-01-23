import { Controller, Get, Post, Put } from '@nestjs/common';
import { PerfilService } from './perfil.service';

@Controller('perfil')
export class PerfilController {
  constructor(private readonly perfilService: PerfilService) {}

  @Get()
  get(): string {
    return this.perfilService.getPerfil();
  }

  @Post()
  createUser(): string {
    return this.perfilService.createPerfil();
  }

  @Put(':id')
  update(): string {
    return this.perfilService.updatePerfil();
  }

  @Get()
  search(): string {
    return this.perfilService.updatePerfil();
  }
}
