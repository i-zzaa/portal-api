import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PermissaoService } from './permissao.service';

@Controller('permissao')
export class PermissaoController {
  constructor(private readonly permissaoService: PermissaoService) {}

  @Get()
  get(): string {
    return this.permissaoService.getPermissao();
  }

  @Post()
  createUser(): string {
    return this.permissaoService.createPermissao();
  }

  @Put(':id')
  update(): string {
    return this.permissaoService.updatePermissao();
  }

  @Delete()
  delete(): string {
    return this.permissaoService.deletePermissao();
  }

  @Get()
  search(): string {
    return this.permissaoService.updatePermissao();
  }
}
