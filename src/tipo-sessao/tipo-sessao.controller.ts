import { Controller, Get, Post, Put } from '@nestjs/common';
import { TipoSessaoService } from './tipo-sessao.service';

@Controller('tipo-sessao')
export class TipoSessaoController {
  constructor(private readonly tipoSessaoService: TipoSessaoService) {}

  @Get()
  get(): string {
    return this.tipoSessaoService.getTipoSessao();
  }

  @Post()
  createUser(): string {
    return this.tipoSessaoService.createTipoSessao();
  }

  @Put(':id')
  update(): string {
    return this.tipoSessaoService.updateTipoSessao();
  }

  @Get()
  search(): string {
    return this.tipoSessaoService.updateTipoSessao();
  }
}
