import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { LocalidadeService } from './localidade.service';

@Controller('localidade')
export class LocalidadeController {
  constructor(private readonly localidadeService: LocalidadeService) {}

  @Get()
  get(): string {
    return this.localidadeService.getLocalidade();
  }

  @Post()
  createUser(): string {
    return this.localidadeService.createLocalidade();
  }

  @Put(':id')
  update(): string {
    return this.localidadeService.updateLocalidade();
  }

  @Delete()
  delete(): string {
    return this.localidadeService.deleteLocalidade();
  }

  @Get()
  search(): string {
    return this.localidadeService.updateLocalidade();
  }
}
