import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { FuncaoService } from './funcao.service';

@Controller('funcao')
export class FuncaoController {
  constructor(private readonly funcaoService: FuncaoService) {}

  @Get()
  get(): string {
    return this.funcaoService.getFuncao();
  }

  @Post()
  createUser(): string {
    return this.funcaoService.createFuncao();
  }

  @Put(':id')
  update(): string {
    return this.funcaoService.updateFuncao();
  }

  @Delete()
  delete(): string {
    return this.funcaoService.deleteFuncao();
  }

  @Get()
  search(): string {
    return this.funcaoService.updateFuncao();
  }
}
